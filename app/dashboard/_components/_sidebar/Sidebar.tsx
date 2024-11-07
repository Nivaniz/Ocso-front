import { LuBoxes, LuHome, LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";


export default function Sidebar(){
    return(
        <nav className="w-1/12 min-w-[8.333%] h-[90vh] bg-red-700 flex flex-col items-center py-90 justify-center gap-10">
            <NavItem icon={<LuHome className="text-5xl"/>} path="/dashboard"/>
            <NavItem icon={<LuTruck className="text-5xl"/>} path="/dashboard/providers"/>
            <NavItem icon={<LuBoxes className="text-5xl"/>} path="/dashboard/products"/>
            <NavItem icon={<LuUser className="text-5xl"/>} path="/dashboard/managers"/>
            <NavItem icon={<LuUsers className="text-5xl"/>} path="/dashboard/employees"/>
        </nav>
    )
}