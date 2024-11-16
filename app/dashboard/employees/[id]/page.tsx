import { API_URL } from "@/constants";
import EmployeeCard from "../_components/EmployeeCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";
import CreateUser from "./_components/CreateUser";
import FormCreateUserEmployee from "./_components/FormCreateUser";
import { LuUser } from "react-icons/lu";

export default async function EmployeesPage({params} : {params: {id: string}}) {
    const respondeEmployee = await fetch(`${API_URL}/employees/${params.id}`,{
        headers: {
            ...authHeaders(),
        },
    });
    const employee: Employee = await respondeEmployee.json();
    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center">
            {
                employee && (
                    <EmployeeDataCard employee={employee}>
                        <CreateUser icon={<LuUser size="20"/>}>
                        <FormCreateUserEmployee employeeId={employee.employeeId} />
                        </CreateUser>
                    </EmployeeDataCard>
                )
            }
            <div>
                <FormUpdateEmployee employee={employee}/>
            </div>
        </div>
    )
}

