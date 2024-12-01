import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { getUserRoles } from "@/helpers/decodeToken";
import { Card } from "@nextui-org/react";

export default async function CountManagersPage(){
    const userRole = getUserRoles()
    if (userRole[0] !== "Admin") return null
    const response = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });
    
    const managers: Manager[] = await response.json();
    const countNoStore = managers.filter((manager: Manager) => !manager.location).length;
    const countWithStore = managers.length - countNoStore;
    
    let max = 0;
    let min = Infinity;
    let salary = 0;
    
    managers.forEach((manager: Manager) => {
        if (manager.managerSalary > max) max = manager.managerSalary;
        if (manager.managerSalary < min) min = manager.managerSalary;
        salary += manager.managerSalary;
    });
    
    const averageSalary = (salary / managers.length).toFixed(2);
    const noStorePercentage = ((countNoStore / managers.length) * 100).toFixed(2);
    
    return (
        <Card className="w-fit px-2 py-4 text-center">
            <h1> Hay {managers.length} manager{managers.length > 1 ? "s" : ""}</h1>
            <h1> Hay {countNoStore} sin tienda ({noStorePercentage}%)</h1>
            <h1> Hay {countWithStore} con tienda</h1>
            <h1> El salario máximo es {max} </h1>
            <h1> El salario mínimo es {min} </h1>
            <h1> El salario promedio es {averageSalary} </h1>
            <h1> Rango de salarios: {max - min} </h1>
        </Card>
    );
}