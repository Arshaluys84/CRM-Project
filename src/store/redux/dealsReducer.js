import {CLIENT_LIST} from "../constant";
import {compare} from "../../common/Helpers";
import {ADD_DEAL, DELETE_DEAL, UPDATE_DEAL} from "./reduxConstants";

const initialState = {
    clientList: CLIENT_LIST,
    clientKey: '',
}
export const dealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DEAL: {
            return {
                ...state,
                clientList: [...state.clientList, action.payload]
            }
        }
        case DELETE_DEAL: {
            return {
                ...state,
                clientList: state.clientList.filter(item => item.key !== action.payload.key)
            }
        }
        case UPDATE_DEAL: {
            return {
                ...state,
                clientKey: action.payload.key
            }
        }
        default:
            return state
    }
}
export const income = (state) => {
    if (state.deals.clientList.length === 0) {
        return 0
    } else {
        return state.deals.clientList.map(item => item.summary).reduce((a, b) => a + b)
    }
}
export const addDealCreator = (payload) => ({type: ADD_DEAL, payload})
export const deleteDealCreator = (payload) => ({type: DELETE_DEAL, payload})
export const updateDealCreator = (payload) => ({type: UPDATE_DEAL, payload})
export const deals = (state) => state.deals.clientList.sort(compare)
export const clientKey = (state) => state.deals.clientKey


