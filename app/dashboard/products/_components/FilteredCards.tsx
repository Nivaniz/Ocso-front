"use client";

import { Product } from "@/entities";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../../providers/[id]/_components/ProductCard";

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
        <>
            <input
                type="text"
                onChange={(e) => setFiltered(e.target.value)}
                placeholder="Nombre del producto"
            />
            {productList.map((product) => (
                <Link key={product.productId} href={`/dashboard/products/${product.productId}`}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </>
    );
}