import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function ManagerPage({
    params,
}: {
    params : {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: [`dashboard:managers:${params.id}`,`dashboard:managers`]
        }
    })
    const data: Manager = await response.json()
    return(
            <Card className="mx-20 py-3 bg-red-50">
                <CardHeader>
                    <p className="w-full">Nombre: <b>{data.managerFullName}</b></p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p className="w-full">Email: {data.managerEmail}</p>
                    <p className="w-full">Teléfono: {data.managerPhoneNumber}</p>
                    {
                        data.location ? (
                            <p className="w-full">Tienda: {data.location.locationName}</p>
                        ) : (<p> No tiene tienda asignada</p>)
                    }
                    
                </CardBody>
            </Card>
    )
}