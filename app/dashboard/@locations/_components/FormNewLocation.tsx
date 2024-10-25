import { Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";
import DeleteLocation from "@/actions/locations/delete";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}){
    if (store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }});

    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-1g">
            <h1 className="text-xl text-white text-center">Crear Tienda: </h1>
            <Input label="Nombre de la tienda" placeholder="New York" name="locationName" />
            <Input label="Dirección" placeholder="New York S/N 83944"  name="locationAddress" />
            <Input label="Latitud"placeholder="120" name="locationLat" />
            <Input label="Longitud" placeholder="50" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations={responseLocation.data}/>
            <button type="submit" color="primary">Subir</button>
        </form>
    )
}