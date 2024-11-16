import { Employee } from "@/entities";
import Link from "next/link";

export default function EmployeeDataCard({employee} : {employee: Employee}){
    return( 
        <div className="flex flex-row items-center gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 m-2 py-2 border-2 border-orange-400">
                <h1 className="font-bold text-xl"> { employee.employeeName + " " + employee.employeeLastName + " |"}  </h1>
                <h1 className="text-xl"> {employee.employeeEmail + " |"} </h1>
                <h1 className="text-xl"> {employee.employeePhoneNumber + " |"} </h1>
                <Link className="underline" href={{pathname: `/dashboard`, query: {
                    store: String(employee.location?.locationId)
                }}}>
                    <h1 className="text-xl"> {employee.location?.locationName } </h1>
                </Link>
                
        </div>
    )
}