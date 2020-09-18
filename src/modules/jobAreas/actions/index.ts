import { IEmployee } from "../../employees/types"

export const getJobAreas = (companyId: string, employees: IEmployee[]): string[] => {
    const jobAreas = employees.filter(emp => emp.companyId === companyId).reduce((ac:string[], emp: IEmployee) => {
        if(!ac.includes(emp.jobArea)){
            ac.push(emp.jobArea);
        }
        return ac;
    },[]);
    return jobAreas;
}