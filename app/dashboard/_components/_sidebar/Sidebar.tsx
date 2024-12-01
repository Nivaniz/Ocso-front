
import { LuBoxes, LuHome, LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";
import { getUserIdClient, getUserRolesClient } from "@/helpers/decodeTokenClient";

export default function Sidebar(){
    const [userRole, setUserRole] = useState("")
    const [userId, setUserId] = useState("")
    useEffect(() => {
      const getUserData = () => {
        const role = getUserRolesClient()
        const id = getUserIdClient()
        setUserRole(role[0])
        setUserId(id)
      }
      getUserData()
    }, [])
    return(
        <nav className="w-1/12 min-w-[8.333%] h-[90vh] bg-red-700 flex flex-col items-center py-90 justify-center gap-10">
            <NavItem icon={<LuHome className="text-5xl"/>} path="/dashboard"/>
            <NavItem icon={<LuTruck className="text-5xl"/>} path="/dashboard/providers"/>
            <NavItem icon={<LuBoxes className="text-5xl"/>} path="/dashboard/products"/>
            {userRole !== "Employee" && ( 
                <NavItem icon={<LuUser className="text-5xl"/>} path={userRole !== "Manager" ? "/dashboard/managers" : `/dashboard/user/${userId}`}/>
            )}
            <NavItem icon={<LuUsers className="text-5xl"/>} path={userRole !== "Employee" ? "/dashboard/employees" : `/dashboard/user/${userId}`}/>
        </nav>
    )
}