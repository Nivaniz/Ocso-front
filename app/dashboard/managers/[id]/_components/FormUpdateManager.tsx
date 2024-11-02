import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@nextui-org/react";

export default function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerWithId = updateManager.bind(null, manager.managerId);
    
    return (
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
            <h1>Actualizar Manager</h1>
            <Input defaultValue={manager.managerFullName} placeholder="Marco Aurelio" name="managerFullName" />
            <Input defaultValue={manager.managerEmail} placeholder="marco@gmail.com" name="managerEmail" />
            <Input defaultValue={String(manager.managerSalary)} placeholder="Salario" name="managerSalary" />
            <Input defaultValue={manager.managerPhoneNumber} placeholder="4439829922" name="managerPhoneNumber" />

            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    );
}