import { combineReducers } from "redux";
import movies_reducer from "./moviesReducer";
import userReducer from "./userReducer";


const rootReducer=combineReducers({
    movies_reducer,
    userReducer
});
export default rootReducer;