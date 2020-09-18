import * as API from "../../../api/api";
import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_FROM_COMPANY } from "../types";

export const getEmployees = () => async (dispatch: any): Promise<void> => {
  const { data: employees } = await API.getEmployees();
  return dispatch({ type: FETCH_EMPLOYEES, payload: employees });
};

export const getEmployeesFromCompany = (companyId: string) => async (
  dispatch: any
): Promise<void> => {
  const { data: employees } = await API.getEmployeesFromCompany(companyId);
  return dispatch({ type: FETCH_EMPLOYEES_FROM_COMPANY, payload: employees });
};