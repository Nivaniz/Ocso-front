import { API_URL } from "@/constants";
import EmployeeCard from "../_components/EmployeeCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";
import { getUserRoles } from "@/helpers/decodeToken";

export default async function EmployeesPage({params} : {params: {id: string}}) {
    const userRole = getUserRoles()
    const respondeEmployee = await fetch(`${API_URL}/employees/${params.id}`,{
        headers: {
            ...authHeaders(),
        },
    });
    const employee: Employee = await respondeEmployee.json();
    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center">
            
            {userRole[0] !== "Manager" ? (
                <>
                    <EmployeeDataCard employee={employee} deleteButton={userRole[0] !== "Employee" ? true : false}/>
                    <div>
                        <FormUpdateEmployee employee={employee}/>
                    </div>
                </>
            ) : (
                <EmployeeCard employee={employee} full={true} updateButton={false} deleteButton={true}/>
            )}
        </div>
    )
}

