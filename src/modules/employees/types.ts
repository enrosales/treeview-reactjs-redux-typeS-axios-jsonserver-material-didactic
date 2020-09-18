export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const FETCH_EMPLOYEES_FROM_COMPANY = "FETCH_EMPLOYEES_FROM_COMPANY";

export type IEmployee = {
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    companyId: string,
    jobTitle: string,
    jobArea: string,
    jobType: string
}

export type IAction = {
    type: string,
    payload: IEmployee[],
}

export type IState = {
    employees: {
        items: IEmployee[],
    }
}
//export type CompanyIndexed = Record<string, Company>
