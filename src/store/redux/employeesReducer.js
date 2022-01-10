import { EMPLOYEES_LIST} from "../constant";
import {compare} from "../../common/Helpers";
import {ADD_EMPLOYEE, DELETE_EMPLOYEE, SET_VALIDATION_MESSAGE, UPDATE_EMPLOYEE} from "./reduxConstants";

const initialState = {
    employeesList: EMPLOYEES_LIST,
    employeeKey: '',
    validationMessage:''
}
export const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE: {
            return {
                ...state,
                employeesList: [...state.employeesList, action.payload]
            }
        }
        case DELETE_EMPLOYEE: {
            return {
                ...state,
                employeesList: state.employeesList.filter(item => item.key !== action.payload.key)
            }
        }
        case UPDATE_EMPLOYEE: {
            return {
                ...state,
                employeeKey: action.payload.key
            }
        }
        case SET_VALIDATION_MESSAGE: {
            return {
                ...state,
                validationMessage: action.payload
            }
        }
        default:
            return state
    }
}

export const addEmployeeCreator = (payload) => ({type: ADD_EMPLOYEE, payload})
export const deleteEmployeeCreator = (payload) => ({type: DELETE_EMPLOYEE, payload})
export const updateEmployeesCreator = (payload) => ({type: UPDATE_EMPLOYEE, payload})
export const setValidationMessageCreator = (payload) => ({type: SET_VALIDATION_MESSAGE, payload})
export const employees = (state) => state.employees.employeesList.sort(compare)
export const employeeKey = (state) => state.employees.employeeKey
export const validationMessage = (state) => state.employees.validationMessage




