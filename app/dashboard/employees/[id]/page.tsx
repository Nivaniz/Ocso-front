import { API_URL } from "@/constants";
import EmployeeCard from "../_components/EmployeeCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";

export default async function EmployeesPage({params} : {params: {id: string}}) {
    const respondeEmployee = await fetch(`${API_URL}/employees/${params.id}`,{
        headers: {
            ...authHeaders(),
        },
    });
    const employee: Employee = await respondeEmployee.json();
    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center">
            <EmployeeDataCard employee={employee}/>
            <div>
                <FormUpdateEmployee employee={employee}/>
            </div>
        </div>
    )
}

