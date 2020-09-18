import { FETCH_COMPANY_PROJECTS, ADD_COMPANY_PROJECT, DELETE_COMPANY_PROJECT, UPDATE_COMPANY_PROJECT, IProject } from "../types";

const arr: IProject[] = []

const initialState = { items: arr };

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_COMPANY_PROJECTS:
            return { ...state, items: action.payload };
        case ADD_COMPANY_PROJECT:
            return {...state, items: state.items.concat(action.payload)}
        case DELETE_COMPANY_PROJECT:
            return { ...state, items: state.items.filter(p => p.id !== action.payload) }
        case UPDATE_COMPANY_PROJECT:
            const copyOfProjects = [...state.items];
            const indexOfProjectToUpdate = copyOfProjects.findIndex(p => p.id === action.payload.id);
            if(indexOfProjectToUpdate > -1) {
                copyOfProjects[indexOfProjectToUpdate] = action.payload;
                return { ...state, items: copyOfProjects }
            }
            return state;
        default:
            return state;
    }
}
