import Image from "next/image";

export default function Header(){
    return (
        <div className="w-screen h-[10vh] bg-red-700 flex flex-row items-center px-10">
            <Image 
                src="/LogoOxxo.png" 
                alt="Logo de Oxxo" 
                width={100} // Ajusta el ancho según sea necesario
                height={70} // Ajusta la altura según sea necesario
                className="my-10"
                draggable={false}
            />
        </div>
    )
}