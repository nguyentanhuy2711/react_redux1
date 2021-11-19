
import { combineReducers } from "redux";
import hobbyReducer from "./hobby";
import userReducers from "./user";


const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducers,
})
export default rootReducer;