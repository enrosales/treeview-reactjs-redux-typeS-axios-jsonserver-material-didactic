export const FETCH_COMPANY_PROJECTS = "FETCH_COMPANY_PROJECTS";
export const ADD_COMPANY_PROJECT = "ADD_COMPANY_PROJECT";
export const DELETE_COMPANY_PROJECT = "DELETE_COMPANY_PROJECT";
export const UPDATE_COMPANY_PROJECT = "UPDATE_COMPANY_PROJECT";

export type IProject = {
    id: string,
    name: string,
    department: string,
    employees: string[],
    companyId: string
}

export type IAction = {
    type: string,
    payload: IProject[],
}

export type IState = {
    projects: {
        items: IProject[],
    }
}
//export type CompanyIndexed = Record<string, Company>
