import { API_URL } from "@/constants";
import EmployeeCard from "../_components/EmployeeCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";

export default async function EmployeesPage({params} : {params: {id: string}}) {
    const respondeEmployee = await fetch(`${API_URL}/employees/${params.id}`,{
        headers: {
            ...authHeaders(),
        },
    });
    const employee: Employee = await respondeEmployee.json();
    return (
        <div className="w-full h-[90vh] flex flex-row">
            <div>
                <EmployeeCard employee={employee} />
            </div>
            <div>
                <FormUpdateEmployee employee={employee}/>
            </div>
        </div>
    )
}

