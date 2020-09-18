export const FETCH_COMPANIES = "FETCH_COMPANIES";
export const FETCH_COMPANY_PROJECTS = "FETCH_COMPANY_PROJECTS";

export type ICompany = {
  id: string;
  name: string;
  business: string;
  slogan: string;
}

export type IAction = {
  type: string,
  payload: ICompany[],
}

export type IState = {
  companies: {
    items: ICompany[],
  }
}
//export type CompanyIndexed = Record<string, Company>
