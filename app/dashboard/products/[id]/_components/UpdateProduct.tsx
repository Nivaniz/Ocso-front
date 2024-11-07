import updateProduct from "@/actions/products/update";
import { Product, Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectProvider from "../../_components/SelectProvider";

export default function UpdateProduct({product, providers}: {product: Product, providers: Provider[]}){
    const { productId } = product;
    const UpdateProductById = updateProduct.bind(null, productId)
    return (
        <form action={UpdateProductById} className="p-10 flex flex-col gap-4">
            <Input name="productName" label="Nombre" defaultValue={product.productName} />
            <Input name="countSeal" label="Num. de Sellos" defaultValue={String(product.countSeal)} />
            <Input name="price" label="Precio" defaultValue={String(product.price)} />
            <SelectProvider providers={ providers } defaultProvider={product.provider.providerId} />
            <Button type="submit" color="primary">
                Guardar cambios
            </Button>
        </form>
    )
}