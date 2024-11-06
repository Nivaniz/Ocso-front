"use server";

import { API_URL} from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
 
export default async function createProduct(formData: FormData){
    let product: any = {}
    for (const key of formData.keys()){
        product[key] = formData.get(key);       
    }
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            ...authHeaders(),
        },
    })
    if(response.status === 201) revalidateTag("dashboard:products")
}