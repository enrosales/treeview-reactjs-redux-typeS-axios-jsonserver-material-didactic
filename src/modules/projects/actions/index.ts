import * as API from "../../../api/api";
import { FETCH_COMPANY_PROJECTS, ADD_COMPANY_PROJECT, DELETE_COMPANY_PROJECT, UPDATE_COMPANY_PROJECT, IProject } from "../types";

export const getCompanyProjects = (companyId: string) => async (dispatch: any): Promise<void> => {
    const { data: projects } = await API.getCompanyProjects(companyId);
    return dispatch({ type: FETCH_COMPANY_PROJECTS, payload: projects });
};

export const addCompanyProject = (project: IProject) => async (dispatch: any): Promise<void> => {
    const {data: newProject} = await API.addProject(project);
    return dispatch({ type: ADD_COMPANY_PROJECT, payload: newProject});
}

export const deleteCompanyProject = (project: IProject) => async (dispatch: any): Promise<void> => {
    await API.removeProject(project.id);
    return dispatch({ type: DELETE_COMPANY_PROJECT, payload: project.id });
}

export const updateCompanyProject = (project: IProject) => async (dispatch: any): Promise<void> => {
    await API.updateProject(project);
    return dispatch({ type: UPDATE_COMPANY_PROJECT, payload: project });
}