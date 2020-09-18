import { FETCH_ADDRESS, IAction } from "../types";

const initialState = { items: [] };

export default function (state = initialState, action: IAction) {
    switch (action.type) {
        case FETCH_ADDRESS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}
