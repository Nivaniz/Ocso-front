import { Button, Input, Spacer } from "@nextui-org/react";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center bg-red-600 p-6 ">
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
                />
                <Input
                    placeholder="Contraseña"
                    fullWidth
                    className="mb-4"
                    color="primary"
                    type="password"
                />
                <Button
                    color="primary"
                    size="lg"
                    className="w-full"
                >
                    Iniciar sesión
                </Button>
                <Spacer y={1} />
                <p className="text-center text-gray-600 text-sm">
                    No tienes una cuenta? <a href="/signup" className="text-red-600 font-semibold">Crear cuenta</a>
                </p>
            </div>
        </div>
    );
}
