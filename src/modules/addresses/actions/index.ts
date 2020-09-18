import * as API from "../../../api/api";
import { FETCH_ADDRESS } from "../types";

export const getCompanyAddress = (companyId: string) => async (dispatch: any): Promise<void> => {
    const { data: address } = await API.getCompanyAddress(companyId);
    return dispatch({ type: FETCH_ADDRESS, payload: address });
};