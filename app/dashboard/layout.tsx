'use client';

import { usePathname } from "next/navigation";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";
import { useState, useEffect } from "react";
// import { getUserRoles } from "@/helpers/decodeToken";
// import { getUserId } from "@/helpers/decodeToken";

export default function LayoutDashboard({
    children,
    locations
  }: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
  }>) {
    const path = usePathname()
    // const [userRole, setUserRole] = useState("")
    // const [userId, setUserId] = useState("")
    // useEffect(() => {
    //   const getUserData = () => {
    //     const role = getUserRoles()
    //     const id = getUserId()
    //     setUserRole(role[0])
    //     setUserId(id[0])
    //   }
    //   getUserData()
    // }, [])

    return <div className="bg-red-50">
        <Header />
        <div className="flex flex-row items-center">
        <Sidebar />
        {children}
        {path === "/dashboard" ? locations : null}
        </div>
        </div>
  }