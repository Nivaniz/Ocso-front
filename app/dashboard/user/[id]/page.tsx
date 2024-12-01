import { API_URL } from "@/constants";
import { Manager, Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import ManagerCard from "../../managers/[id]/_components/ManagerCard";
import UpdateManager from "../../managers/[id]/_components/UpdateManager";
import FormUpdateManager from "../../managers/[id]/_components/FormUpdateManager";
import DeleteManagerButton from "../../managers/[id]/_components/DeleteManagerButton";
import { getUserRoles } from "@/helpers/decodeToken";
import EmployeeDataCard from "../../employees/[id]/_components/EmployeeDataCard";
import FormUpdateEmployee from "../../employees/[id]/_components/FormUpdateEmployee";
import { div } from "framer-motion/client";

export default async function UserPage({
    params,
}: {
    params : {
        id: string;
    };
}) {
    const userRole = getUserRoles()
    if (userRole[0] === "Manager"){
        const response = await fetch(`${API_URL}/managers/user/${params.id}`, {
            headers: {
                ...authHeaders(),
            },
            next: {
                tags: [`dashboard:managers:${params.id}`,`dashboard:managers`]
            }
        })
        const data: Manager = await response.json()
        
        return(
            <div className="flex flex-col gap-10 w-full items-center justify-center">
                <ManagerCard manager={data}></ManagerCard>
                <div className="bg-white w-fit shadow-medium rounded-md px-10 py-2 flex flex-row flex-grow-0 gap-2">
                    <UpdateManager>
                        <FormUpdateManager manager={data} />
                    </UpdateManager>
                </div>
            </div> 
        )
    } else if (userRole[0] === "Employee"){
        const respondeEmployee = await fetch(`${API_URL}/employees/user/${params.id}`,{
            headers: {
                ...authHeaders(),
            },
        });
        const employee: Employee = await respondeEmployee.json();
        return (
            <div className="w-full h-[90vh] flex flex-col items-center justify-center">
                <EmployeeDataCard employee={employee} deleteButton={userRole[0] !== "Employee" ? true : false}/>
                    <div>
                        <FormUpdateEmployee employee={employee}/>
                    </div>
            </div>
        )
    } else {
        return(
            <div className="w-full h-[50vh] flex items-center justify-center">
                <h2 className="text-3xl font bold">Eres admin</h2>
            </div>
        )
    }
    
}