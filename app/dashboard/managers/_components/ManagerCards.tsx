import { API_URL} from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function ManagerCards() {
  const response = await fetch(`${API_URL}/managers`, {
      method: "GET",
      headers: {
        ...authHeaders()
      },
      next: {
        tags: ["dashboard:managers"]
      }
    });
    const data: Manager[] = await response.json()
    return data?.map((manager: Manager) => {
      return (
        <Link href={{pathname : `/dashboard/managers/${manager.managerId}`}}>
          <Card className="mx-10 my-10">
                <CardHeader>
                    <p className="w-full">Nombre: <b>{manager.managerFullName}</b></p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p className="w-full">Email: {manager.managerEmail}</p>
                    <p className="w-full">Teléfono: {manager.managerPhoneNumber}</p>
                </CardBody>
            </Card>
        </Link>
      )
    });
  }
