"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateManager(managerId: string, formData: FormData) {
    let manager: any = {};
    for (const key of formData.keys()) {
        manager[key] = formData.get(key);
    }

    // Convertir `managerSalary` y `location` a números, si están presentes
    manager['managerSalary'] = +manager['managerSalary'];
    if (manager['location']) {
        manager['location'] = +manager['location'];
    } else {
        delete manager['location'];
    }

    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            'content-type': 'application/json',
            ...authHeaders(),
        },
    });


    if (response.status === 200) {
        revalidateTag("dashboard:managers");
        revalidateTag(`dashboard:managers:${managerId}`);
        redirect ("/dashboard/managers")
    }
}