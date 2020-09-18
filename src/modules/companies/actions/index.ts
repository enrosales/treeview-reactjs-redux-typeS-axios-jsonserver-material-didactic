import * as API from "../../../api/api";
import { FETCH_COMPANIES } from "../types";

export const getCompanies = () => async (dispatch: any): Promise<void> => {
  const { data: companies } = await API.getCompanies();
  return dispatch({ type: FETCH_COMPANIES, payload: companies });
};