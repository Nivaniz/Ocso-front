import { Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation(){
    const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return (
        <form action={createLocation}>
            <Input label="Nombre de la tienda" name="locationName" />
            <Input label="Dirección" name="locationAdress" />
            <Input label="Latitud" name="locationLat" />
            <Input label="Longitud" name="locationLng" />
            <SelectManager managers={data} />
            <button type="submit">Subir</button>
        </form>
    )
}