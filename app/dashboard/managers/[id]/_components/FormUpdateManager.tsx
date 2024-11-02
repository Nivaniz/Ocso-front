import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async  function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerWithId = updateManager.bind(null, manager.managerId);
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        }
    })
    const stores = await responseStores.json()
    
    return (
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
            <h1>Actualizar Manager</h1>
            <Input defaultValue={manager.managerFullName} placeholder="Marco Aurelio" name="managerFullName" />
            <Input defaultValue={manager.managerEmail} placeholder="marco@gmail.com" name="managerEmail" />
            <Input defaultValue={String(manager.managerSalary)} placeholder="Salario" name="managerSalary" />
            <Input defaultValue={manager.managerPhoneNumber} placeholder="4439829922" name="managerPhoneNumber" />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    );
}