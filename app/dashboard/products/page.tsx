import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "./_components/ProductCard";

const ProductsPage = async () => {
    const response = await fetch(`${API_URL}/products`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:products"],
        },
    });
    const products: Product[] = await response.json();
    
    return (
        <div>
            {products.map((product) => (
                <ProductCard product={product} key={product.productId} />
            ))}
        </div>
    );
};

export default ProductsPage;