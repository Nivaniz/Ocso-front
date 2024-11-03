import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import updateProvider from "@/actions/providers/update";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButton";

export default function FormUpdateProvider ({provider}: {provider: Provider}) {
    const { providerId } = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId)
    return (
        <>
        <h1 className="text-2xl px-4">Actualizar Provedor</h1>
        <form action={updateProviderWithId} className="flex flex-wrap gap-10 flex-grow-0 bg-red-200 rounded-md px-10 py-10 mr-20 items-center justify-center">
            <Input className="max-w-[250px]" defaultValue={provider.providerName} label="Nombre del proovedor" placeholder="José María" name="providerName" />
            <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Correo electrónico" placeholder="marias@gmail.com" name="providerEmail" />
            <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber}label="Número" placeholder="6574889483" name="providerPhoneNumber" />
            <Button color="primary" type="submit">
                Actualizar
            </Button>
            <DeleteProvider>
                <h1 className="text-white text-center">¿Estás seguro de eliminar al proveedor <b>{provider.providerName}</b>?</h1>
                <DeleteProviderButton providerId={providerId} />
            </DeleteProvider>
        </form>
        </>
        
    )
}