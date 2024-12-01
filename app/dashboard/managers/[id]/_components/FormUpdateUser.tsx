'use client'

import registerEmployee from "@/actions/users/register-employee";
import updateUser from "@/actions/users/update";
import { Employee, User } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import { generate } from "generate-password";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

export default function FormUpdateUser({ user }: { user: User }) {
    const { userId } = user;
    const [password, setPassword] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    const updateUserById = updateUser.bind(null, userId);

    return (
        <form action={updateUserById} className="py-1s0 flex flex-col gap-2">
            <h1 className="text-white font-bold text-center">Actualizar Usuario</h1>
            <Input defaultValue={user.userEmail} name="userEmail" label="Correo de cuenta" />
            <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visible ? "text" : "password"}
                name="userPassword"
                label="Contraseña"
                endContent={
                    <Button
                        type="button"
                        onClick={() => setVisible(!visible)}
                    >
                        <LuEye />
                    </Button>
                }
            />
            <Button
                color="danger"
                onPress={() => {
                    setPassword(generate({
                        length: 10
                    }));
                }}
            >
                Generar Contraseña
            </Button>
            <Button color="primary" type="submit">
                Actualizar Usuario
            </Button>
        </form>
    );
}