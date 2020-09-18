import { SET_SELECTED_NODE, IAction, INodeSelected } from "../types";

const initialState: INodeSelected = {
    nodeSelected: "None",
    companyId: "",
    id: ""
};

export default function (state = initialState, action: IAction) {
    switch (action.type) {
        case SET_SELECTED_NODE:
           return { ...action.payload };
        default:
            return state;
    }
}
