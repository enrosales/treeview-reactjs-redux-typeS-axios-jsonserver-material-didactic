import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_FROM_COMPANY, IAction } from "../types";

const initialState = { items: [] };

export default function (state = initialState, action: IAction) {
    switch (action.type) {
      case FETCH_EMPLOYEES:
      case FETCH_EMPLOYEES_FROM_COMPANY:
        return { ...state, items: action.payload };
      default:
        return state;
    }
}
