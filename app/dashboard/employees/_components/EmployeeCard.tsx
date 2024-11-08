import { Employee } from "@/entities";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

export default function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <Card className="max-h-72">
            <CardHeader>
            <img src="/persona.jpg" alt="Employee Image" className="w-16 h-16 rounded-full object-cover mr-4" />
                <h1 className="font-bold text-xl">{employee.employeeName + " " + employee.employeeLastName}</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo: <b>{employee.employeeEmail}</b></p>
                <p>Número de teléfono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
            <CardFooter>
                <Link href={`/dashboard/employees/${employee.employeeId}`}>
                    <Button variant="ghost"> Actualizar datos </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}