import { LuPlus } from "react-icons/lu";
import ModalGeneric from "../_components/ModalGeneric";
import FormCreateManager from "./_components/FormCreateManager";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager, User } from "@/entities";
import { getUserEmail, getUserId, getUserRoles } from "@/helpers/decodeToken";
import ManagerCard from "./[id]/_components/ManagerCard";


const ManagersPage = async () => {
    const userRole = getUserRoles()
    console.log(userRole)
    if (userRole[0] === "Admin"){
        const responseStores = await fetch(`${API_URL}/locations`, {
            headers: {
                ...authHeaders(),
            }
        })
        const stores: Location[] = await responseStores.json();
        return (
            <ModalGeneric icon={<LuPlus size="20" />}>
                <FormCreateManager stores={stores}/>
            </ModalGeneric>
        )
    } else if (userRole[0] === "Manager"){
        const userId = getUserId()
        const responseUser = await fetch(`${API_URL}/managers/user/${userId}`,{
            headers: {...authHeaders()},
            next: {
                tags: ["dashboard:managers"]
            }
        })

        const managerData : Manager = await responseUser.json()

        return (
            <div className="w-full flex items-center justify-center h-[50vh]">
                <ManagerCard manager={managerData}/>
            </div>
        )
    } else {
        return (
            <div className="w-full flex items-center justify-center h-[50vh]">
                <h2 className="text-3xl font-bold">No tienes acceso a esta ruta</h2>
            </div>
        )
    }
    
}

export default ManagersPage;