import { SET_SELECTED_NODE, INodeSelected } from "../types";

export const setSelectedNode = (node: INodeSelected) => (dispatch: any) => {
    return dispatch({ type: SET_SELECTED_NODE, payload: node });
};