import { IEmployee } from "../modules/employees/types";
import { IProject } from "../modules/projects/types";

export const getEmployeesFromCompanyAndJobArea = (companyId: string, area: string, employees: IEmployee[]) => (): IEmployee[] => {
    const _employees = employees.filter(emp => emp.companyId === companyId).filter(emp => emp.jobArea === area)
    return _employees;
};

export const getNodeIdFormSelectedNode = (currentNode: string = "None", companyId: string, id: string): string => {
return `${currentNode}*${companyId}*${id}`;
}

export const getEmployeesFromProject = (employeesIdInProject: string[], employees: IEmployee[]): IEmployee[] => {
    return employees.filter(emp => employeesIdInProject.includes(emp.id));
}

export const totalOfProjectsInArea = (employees: IEmployee[], projects: IProject[]): number => {
    let _projects: IProject[] = [];
    employees.forEach(emp => {
        const temp = projects.filter(p => p.employees.includes(emp.id));
        _projects = _projects.concat(temp);
    });
    const uniqueProjects = new Set(_projects);
    return uniqueProjects.size;
}

export const getEmployeeById = (employees: IEmployee[], id: string): IEmployee | null => {
    const index = employees.findIndex(emp => emp.id === id);
    return index !== -1 ? employees[index] : null;
}

export const totalProjectsByEmployee = (projects: IProject[], id: string): IProject[] | [] => {
    return projects.filter(p => p.employees.includes(id));
}