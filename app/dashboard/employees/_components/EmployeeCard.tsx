
import { Employee } from "@/entities";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";
import DeleteEmployee from "../[id]/_components/DeleteEmployee";

export default function EmployeeCard({ employee, full, updateButton, deleteButton}: { employee: Employee, full : boolean, updateButton: boolean, deleteButton : boolean }) {
    return (
        <Card className={`max-h-72 ${full && "w-[500px]"}`}>
            <CardHeader className={`flex ${deleteButton && "flex justify-between"}`}>
                <img src="/persona.jpg" alt="Employee Image" className="w-16 h-16 rounded-full object-cover mr-4" />
                <h1 className="font-bold text-xl">{employee.employeeName + " " + employee.employeeLastName}</h1>
                {deleteButton && (
                    <DeleteEmployee employeeId={employee.employeeId}/>
                )}
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo: <b>{employee.employeeEmail}</b></p>
                <p>Número de teléfono: <b>{employee.employeePhoneNumber}</b></p>
                {full && (
                    <>
                        <p>Telefono: <b>{employee.employeePhoneNumber}</b></p>
                        <p>Tienda: <b>{employee.location?.locationName}</b></p>
                    </>
                )}
            </CardBody>
            <CardFooter>
                {updateButton && (
                    <Link href={`/dashboard/employees/${employee.employeeId}`}>
                        <Button variant="ghost">Ver datos </Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}