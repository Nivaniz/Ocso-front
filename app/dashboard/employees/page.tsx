import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";

const EmployeesPage = async () => {
    const response = await fetch(`${API_URL}/employees`, {
        headers: {
            ...authHeaders(),
    }})
    const employees: Employee[] = await response.json();

    return (
        <div className="flex flex-wrap flex-grow-0 h-[40vh] gap-4 overflow-y-auto p-10">
            {employees.map((employee: Employee) => {
                return <EmployeeCard key={employee.employeeId} employee={employee} />
            })}
        </div>
    )
}

export default EmployeesPage;