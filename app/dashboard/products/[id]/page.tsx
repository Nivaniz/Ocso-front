import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "../_components/ProductCard";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";
import DeleteProduct from "./_components/DeleteProduct";
import { getUserRoles } from "@/helpers/decodeToken";

export default async function ProductPage({params} : {params : {
    id: string;
}}) {
    const userRole = getUserRoles()
    const responseProduct = await fetch(`${API_URL}/products/${params.id}`,{
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: [`dashboard:products:${params.id}`]
        }
    })
    const product: Product = await responseProduct.json();

    const responseProviders = await fetch(`${API_URL}/providers`,{
        headers: {
            ...authHeaders(),
        },
    })
    const providers: Provider[] = await responseProviders.json();

    return (
        <div className="w-full">
            <div className="bg-orange-500">
                <h1 className="w-full font-bold text-white text-center text-2xl py-2">Nombre del producto: {product.productName}</h1>
                <h1 className="text-xl font-bold text-white text-center">Precio: {product.price}</h1>
                <h1 className="text-md font-bold text-white text-center py-2">Cantidad de Sellos: {product.countSeal}</h1>
            </div>
            
            <UpdateProduct product={product} providers={providers} />
            {userRole[0] !== "Employee" && (
                <div className="pl-10">
                    <DeleteProduct productId={product.productId} />
                </div>
            )}
            
        </div>

    )
}