"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteEmployee(employeeId: string, formData: FormData){
    let employee: any = {};
    for (const key of formData.keys()) {
        if (!key.includes("ACTION")) {
            employee[key] = formData.get(key);
        }
    }
    formData.delete("$ACTION_REF_0")
    formData.delete("$ACTION_0:1")
    formData.delete("$ACTION_0:0")

    const response = await fetch (`${API_URL}/employees/${employeeId}`,{
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            ...authHeaders(),
        },
        body: JSON.stringify(employee),
    })

    if (response.status === 200) {
        revalidateTag("dashboard:employee");
        redirect("/dashboard/employees");
    }
}


