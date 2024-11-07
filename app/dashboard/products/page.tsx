import createProduct from "@/actions/products/create"
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

const ProductsPage = async () => {
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders(),
        }})
    const providers = await responseProviders.json();
    return (
        <form className="w-full flex flex-col px-40 justify-center pt-10 gap-6" action={createProduct}> 
        <h1 className="text-2xl font-bold"> Crear Producto </h1>
            <Input label="Nombre" name="productName" />
            <Input label="Precio" endContent={<LuDollarSign size="20"/>} name="price" />
            <Input label="Num. de Sellos" name="countSeal" />
            <SelectProvider providers={providers} />
            <Button type="submit" color="primary">
                Crear Producto
            </Button>
        </form>
    );
};

export default ProductsPage;

