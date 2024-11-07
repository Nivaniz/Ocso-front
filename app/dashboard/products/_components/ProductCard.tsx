import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";

export default function ProductCard ({product}: {product: Product}) {
    return (
        <Card className="max-w-[350px] mb-10">
            <CardHeader>{product.productName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Nombre del producto: <b>{product.productName}</b></p>
                <p>Precio del producto: <b>{product.price}</b></p>
                <p>Cantidad de Sellos: <b>{product.countSeal}</b></p>
                <p>Proveedor: {""}<Link className="font-bold underline" href={`/dashboard/providers/${product.provider.providerId}`}>{product.provider.providerName}</Link></p>
            </CardBody>
        </Card>
    )
}