"use client";

import { Product, Provider } from "@/entities";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Input, Select, SelectItem } from "@nextui-org/react";
import ProviderCard from "../../providers/_components/ProviderCard";

export default function FilteredCards({ products, providers }: { products: Product[], providers: Provider[] }) {
    const [filtered, setFiltered] = useState<string>("");
    const [provider, setProvider] = useState<string>();
    const [show, setShow] = useState(false);
    const [productList, setProductList] = useState<Product[]>(products);

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if (product.productName.toLowerCase().includes(filtered.toLowerCase()) && product.provider.providerId === provider) {
                return true;
            } else return false;
        });
        setProductList(filteredProducts);
        setShow(true);
    }, [filtered, provider, products]);

    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-red-400 border-r-2 pt-10 px-10">
            <Select label="Proveedor" onChange={(e) => {
                setProvider(e.target.value);
            }}>
                {providers.map((provider) => (
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                ))}
            </Select>
            <Input
                onChange={(e) => setFiltered(e.target.value)}
                label="Nombre del producto"
            />
            {show && productList.map((product) => (
                <Link className="hover:scale-110 transition-transform" key={product.productId} href={`/dashboard/products/${product.productId}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </div>
    );
}