import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_URL } from "../constants/constants";
import { ICompany } from "../modules/companies/types"
import { IAddress } from "../modules/addresses/types"
import { IEmployee } from "../modules/employees/types";
import { IProject } from '../modules/projects/types';

const api: AxiosInstance = axios.create({
    baseURL: API_URL,
});

// eslint-disable-next-line import/prefer-default-export

export const getCompanies = (): Promise<AxiosResponse<ICompany[]>> => api.get('companies');

export const getCompanyAddress = (companyId: string): Promise<AxiosResponse<IAddress[]>> => api.get(`companies/${companyId}/addresses`);

export const getCompanyProjects = (companyId: string): Promise<AxiosResponse<IProject[]>> => api.get(`companies/${companyId}/projects`);

export const getEmployeesFromCompany = (companyId: string): Promise<AxiosResponse<IEmployee[]>> => api.get(`companies/${companyId}/employees`);

export const getEmployees = (): Promise<AxiosResponse<IEmployee[]>> => api.get('employees');

export const getEmployeeById = (id: string): Promise<AxiosResponse<IEmployee>> => api.get(`employees/${id}`);

export const addProject = (project: IProject): Promise<AxiosResponse<IProject>> => api.post('projects', project);

export const removeProject = (id: string): Promise<AxiosResponse> => api.delete(`projects/${id}`);

export const updateProject = (project: IProject): Promise<AxiosResponse<IProject>> => api.put(`projects/${project.id}`, project);

