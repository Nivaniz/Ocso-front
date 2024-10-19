'use client';
import { API_URL } from "@/constants";
import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault();
        
        const formData = new FormData(e.target as HTMLFormElement);
        let authData: any = {};
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
    
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                ...authData
            }, {
                withCredentials: true,
            });
            if (response.status === 201) router.push('/dashboard');
            setSubmitting(false);
        } catch (e) {
            setSubmitting(false);
        }
        return;
    };
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
                    disabled={submitting}
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
