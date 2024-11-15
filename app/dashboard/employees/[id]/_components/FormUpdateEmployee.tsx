import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";

export default function  FormUpdateEmployee({employee}: {employee: Employee}){
    const {employeeId} = employee;
    const updateEmployeeById = updateEmployee.bind(null, employeeId);
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-9 bg-orange-500 rounded-md md-2 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
            <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName} />
            <Input label="Correo electrónico" name="employeeEmail" defaultValue={employee.employeeEmail} />
            <Input label="Num. de Teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber} />
            <Button type="submit" color="primary">
                Actualizar datos
            </Button>
        </form>
    )
}