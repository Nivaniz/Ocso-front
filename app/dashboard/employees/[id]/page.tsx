export default async function EmployeesPage({params} : {params: {id: string}}) {
    return params.id;
}

// return <EmployeeCard employee={employee}>;