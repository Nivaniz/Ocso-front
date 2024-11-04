"use client";

import { Product } from "@/entities";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../../providers/[id]/_components/ProductCard";
import { Input } from "@nextui-org/react";

export default function FilteredCards({ products }: { products: Product[] }) {
    const [filtered, setFiltered] = useState<string>("");
    const [productList, setProductList] = useState<Product[]>(products);

    useEffect(() => {
        const filteredProducts = products.filter((product) =>
            product.productName.toLowerCase().includes(filtered.toLowerCase())
        );
        setProductList(filteredProducts);
    }, [filtered, products]);

    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-red-400 border-r-2 pt-10 px-10">
            <Input
                onChange={(e) => setFiltered(e.target.value)}
                label="Nombre del producto"
            />
            {productList.map((product) => (
                <Link className="hover:scale-110 transition-transform" key={product.productId} href={`/dashboard/products/${product.productId}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </div>
    );
}