import { combineReducers } from "redux";
import amountReducer from "./reducer"

const  reducers = combineReducers({
    amount : amountReducer
})
export default reducers