import ModalGeneric from "@/app/dashboard/_components/ModalGeneric";
import { Manager } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import FormUpdateUser from "./FormUpdateUser";
import FormCreateUserManager from "./FormCreateUser";

export default function ManagerCard({manager}: {manager: Manager}){
    return (
        <Card className="mx-20 py-3 text-center">
                <CardHeader>
                    <p className="w-full"><b className="text-3xl">{manager.managerFullName}</b></p>
                    {
                        manager.user ? (
                            <ModalGeneric icon={<LuPlus size="20"/>}>
                                <FormUpdateUser user={manager.user} />
                            </ModalGeneric>
                        ) : (
                            <ModalGeneric icon={<LuPlus size="20"/>}>
                                <FormCreateUserManager manager={manager} />
                            </ModalGeneric>
                        )
                    }
                </CardHeader>
                <Divider/>
                <CardBody className="text-center text-xl">
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
                    <p className="w-full">Salario: <b>$ {manager.managerSalary}</b></p>
                    {
                        manager.location ? (
                            <Link href={{pathname: `/dashboard`,
                                query: {
                                    store: manager?.location?.locationId
                                }
                            }}><b className="w-full underline">Tienda: {manager?.location?.locationName}</b></Link>
                        ) : (<b><p> No tiene tienda asignada</p></b>)
                    }
                    
                </CardBody>
            </Card>
    );
}