import { combineReducers } from "redux";
import companiesReducer from "../modules/companies/reducers/companyReducer";
import addressesReducer from '../modules/addresses/reducers/addressReducer';
import projectsReducer from "../modules/projects/reducers/projectReducer";
import employeesReducer from "../modules/employees/reducers/employeesReducer";
import nodeSelectedReducer from "../modules/App/reducers/nodeSelectedReducer";

export default combineReducers({
    companies: companiesReducer,
    address: addressesReducer,
    projects: projectsReducer,
    employees: employeesReducer,
    nodeSelected: nodeSelectedReducer
});
