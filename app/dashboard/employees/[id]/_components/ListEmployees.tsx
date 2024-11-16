"use client";

import { Employee, Location } from "@/entities";
import EmployeeCard from "../../_components/EmployeeCard";
import CreateEmployee from "./CreateEmployee";
import FormCreateEmployee from "./FormCreateEmployee";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function ListEmployees({ employees, locations }: { employees: Employee[]; locations: Location[]; }) {
    const [filter, setFilter] = useState<string>(""); // Corrección aquí

    return (
        <div className="">
    <Select label="Tiendas" defaultSelectedKeys={[]} className="w-80 pr-20 py-2" onChange={(e) => {
        setFilter(e.target.value);
    }}>
        {locations.map((location) => (
            <SelectItem key={location.locationId}>
                {location.locationName}
            </SelectItem>
        ))}
    </Select>
    <div className="flex flex-wrap gap-2 mt-4">
        {employees.filter((employee: Employee) => {
            if (filter === "") return true;
            return String(employee.location?.locationId) === filter;
        }).map((employee: Employee) => (
            <EmployeeCard key={employee.employeeId} employee={employee} />
        ))}
    </div>
</div>
    );
}