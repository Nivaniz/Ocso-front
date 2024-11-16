import { API_URL } from "@/constants";
import { Employee, Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";
import FormCreateEmployee from "./[id]/_components/FormCreateEmployee";
import ListEmployees from "./[id]/_components/ListEmployees";
import CreateEmployee from "./[id]/_components/CreateEmployee";
import { LuPlus } from "react-icons/lu";

const EmployeesPage = async () => {
    const response = await fetch(`${API_URL}/employees`, {
        headers: {
            ...authHeaders(),
    },
        next: {
            tags: ["dashboard:employees"],
        }
    })
    const employees: Employee[] = await response.json();
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
    },
        next: {
            tags: ["dashboard:locations"],
        }
    });
    const locations: Location[] = await responseLocations.json();

    return (
        <div className="flex flex-wrap flex-grow-0 h-auto gap-4 overflow-y-auto p-10">
            <ListEmployees employees={employees} locations={locations}></ListEmployees>
            <div className="absolute bottom-10 right-10">
                <CreateEmployee icon={<LuPlus size={20} />}>
                    <FormCreateEmployee />
                </CreateEmployee>
            </div>
        </div>
    )
}

export default EmployeesPage;