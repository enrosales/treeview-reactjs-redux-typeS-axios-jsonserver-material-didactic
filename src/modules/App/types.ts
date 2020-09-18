export const SET_SELECTED_NODE = "SET_SELECTED_NODE";

export type INodeSelected = {
    nodeSelected: NodeType
    companyId: string
    id: string,
};

export type IState = {
    nodeSelected: INodeSelected
}

export type IAction = {
    type: string,
    payload: INodeSelected,
}

export type NodeType = 'None' | 'Company' | 'JobArea' | 'Employee';