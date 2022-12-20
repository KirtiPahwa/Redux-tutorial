import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
const reducers = combineReducers({
  amount: amountReducer, //assigingn amount state with amount reduer
});
export default reducers;
