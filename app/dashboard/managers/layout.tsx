import { ReactNode } from "react";
import ManagerCards from "./_components/ManagerCards";
import { getUserRoles } from "@/helpers/decodeToken";

export default function LayoutManagers({children, count}: {children: ReactNode, count: ReactNode}) {
    const userRole = getUserRoles()
    return (
        <>
        {userRole[0] === "Admin" && (
            <div className="w-4/12 max--h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">
                <ManagerCards/>
            </div>
        )}
        <div className="w-7/12 flex flex-col justify-center items-center gap-10">
            <div>{children}</div> {userRole[0] === "Admin" && (<div>{count}</div>)}
        </div>
        </>
    )
}