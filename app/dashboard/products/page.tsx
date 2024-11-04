import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";

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
        <div className="flex flex-wrap gap-6">
            <FilteredCards products={products}/>
        </div>
    );
};

export default ProductsPage;