import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"

export default async function registerEmployee(employeeId: string, formData: FormData){
    let data:any = {}
    data.userEmail = formData.get("userEmail")
    data.userPassword = formData.get("userPassword")
    data.userRoles[0] = "Employee"

    const response = await fetch(`${API_URL}/auth/register?role=employee`,{
        method: "POST",
        headers: {
            ...authHeaders(),
            'content-type': 'aplication/json',
        },
        body: JSON.stringify(data)
    })
    console.log(response);
}