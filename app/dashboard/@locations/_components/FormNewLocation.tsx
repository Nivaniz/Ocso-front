import { Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}){
    if (store) return null;
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataManagers: Manager[] = await responseManagers.json()
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations"]
        }
    })
    const dataLocations: Location[] = await responseLocations.json()
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-1g">
            <h1 className="text-xl text-white text-center">Crear Tienda</h1>
            <Input required={true} label="Nombre de la tienda" placeholder="New York" name="locationName" />
            <Input required={true} label="Dirección" placeholder="New York S/N 83944"  name="locationAddress" />
            <Input required={true} label="Latitud"placeholder="120" name="locationLat" />
            <Input required={true} label="Longitud" placeholder="50" name="locationLng" />
            <SelectManager managers={dataManagers} locations={dataLocations}/>
            <button type="submit" className="bg-red-500 border-2 border-red-500 text-white px-4 py-2 rounded">Crear</button>
        </form>
    )
}