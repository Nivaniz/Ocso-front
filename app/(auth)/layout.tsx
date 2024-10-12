import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-red-600 w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
            <Image 
                src="/LogoOxxo.png" 
                alt="Logo de Oxxo" 
                width={200} // Ajusta el ancho según sea necesario
                height={100} // Ajusta la altura según sea necesario
                className="my-10"
            />
            {children}
        </div>
    );
}
