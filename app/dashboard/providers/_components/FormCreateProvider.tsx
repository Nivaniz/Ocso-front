import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider() {
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2xl text-white">Crear Provedor</h1>
            <Input label="Nombre del proovedor" placeholder="José María" name="providerName" />
            <Input label="Correo electrónico" placeholder="marias@gmail.com" name="providerEmail" />
            <Input label="Número" placeholder="6574889483" name="providerPhoneNumber" />
            <Button color="primary" type="submit">
                Crear
            </Button>
        </form>
    )
}