'use client';
import { API_URL } from "@/constants";
import { Button, Input, Spacer } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // To store any login errors
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitting(true);
        setErrorMessage(""); // Clear any previous error message

        const formData = new FormData(e.target as HTMLFormElement);
        const authData = {
            userEmail: formData.get("userEmail"),
            userPassword: formData.get("userPassword"),
        };

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify(authData),
                headers: {
                    "Content-Type": "application/json" // Ensuring the correct Content-Type
                },
                cache: "no-cache",
                credentials: 'include',
            });

            if (response.status === 201) {
                router.push('/dashboard');
            } else {
                const errorResponse = await response.json();
                setErrorMessage(errorResponse.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="flex flex-col items-center justify-center bg-red-600 p-6" onSubmit={handleSubmit}>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="mb-4 text-center text-red-600">Inicia sesión con nosotros</h2>
                <p className="mb-6 text-center text-gray-600">
                    Accede a todas nuestras funciones exclusivas.
                </p>
                {errorMessage && <p className="mb-4 text-center text-red-600">{errorMessage}</p>}
                <Input
                    placeholder="Correo electrónico"
                    fullWidth
                    className="mb-4"
                    color="primary"
                    type="email"
                    name="userEmail"
                    required
                />
                <Input
                    placeholder="Contraseña"
                    fullWidth
                    className="mb-4"
                    color="primary"
                    type="password"
                    name="userPassword"
                    required
                />
                <Button
                    color="primary"
                    size="lg"
                    className="w-full"
                    type="submit"
                    disabled={submitting}
                >
                    {submitting ? "Iniciando sesión..." : "Iniciar sesión"}
                </Button>
                <Spacer y={1} />
                <p className="text-center text-gray-600 text-sm">
                    No tienes una cuenta? <a href="/signup" className="text-red-600 font-semibold">Crear cuenta</a>
                </p>
            </div>
        </form>
    );
}