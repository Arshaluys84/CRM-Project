import {combineReducers, createStore} from "redux";
import {dealsReducer} from "./dealsReducer";
import {employeesReducer} from "./employeesReducer";

const reducers = combineReducers({
    deals: dealsReducer,
    employees: employeesReducer
})

export const store = createStore(
    reducers

)
