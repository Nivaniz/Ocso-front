import { API_URL} from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { getUserRoles } from "@/helpers/decodeToken";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function LocationCard({store}: {store: string | string[] | undefined}){
    const userRole = getUserRoles()
    if (!store) return null;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    });
    const data: Location = await response.json()
    return (
        <Card>
            <CardHeader>
                <p className="w-full">Tienda: <b>{data.locationName}</b></p>
                </CardHeader>
            <Divider/>
                <CardBody>
                    <p className="w-full">Manager: <Link href={{pathname: userRole[0] !== "Employee" ? `/dashboard/managers/${data.manager?.managerId}` : ""}}><b className="underline">{data.manager?.managerFullName}</b></Link></p>
                    <p className="w-full">Direccion: <b>{data.locationAddress}</b></p>
                </CardBody>
        </Card>
    )

}