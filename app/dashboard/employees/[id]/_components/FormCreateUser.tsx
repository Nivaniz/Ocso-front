'use client'

import registerEmployee from "@/actions/users/register-employee"
import { Input } from "@nextui-org/react"

export default function FormCreateUserEmployee({employeeId}: {employeeId: string}){
    const registerEmployeeById = registerEmployee.bind(null, employeeId)
    return (
        <form action={registerEmployeeById}>
            <Input name="userEmail" label="Correo de cuenta"/>
            <Input type="password" name="userPassword" label="contraseña"/>
        </form>
    )
}