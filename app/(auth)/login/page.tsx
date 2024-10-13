'use client';
import { API_URL } from "@/constants";
import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";

export default function LoginPage() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        const { data } = await axios.post(`${API_URL}/auth/login`, {
            ...authData
        },{
            withCredentials: true,
        });
        console.log(data);
        return;
    }
    return (
        <form className="flex flex-col items-center justify-center bg-red-600 p-6 " onSubmit={handleSubmit}>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="mb-4 text-center text-red-600">Inicia sesión con nosotros</h2>
                <p className="mb-6 text-center text-gray-600">
                    Accede a todas nuestras funciones exclusivas.
                </p>
                <Input
                    placeholder="Correo electrónico"
                    fullWidth
                    className="mb-4"
                    color="primary"
                    type="email"
                    name="userEmail"
                />
                <Input
                    placeholder="Contraseña"
                    fullWidth
                    className="mb-4"
                    color="primary"
                    type="password"
                    name="userPassword"
                />
                <Button
                    color="primary"
                    size="lg"
                    className="w-full"
                    type="submit"
                >
                    Iniciar sesión
                </Button>
                <Spacer y={1} />
                <p className="text-center text-gray-600 text-sm">
                    No tienes una cuenta? <a href="/signup" className="text-red-600 font-semibold">Crear cuenta</a>
                </p>
            </div>
        </form>
    );
}
