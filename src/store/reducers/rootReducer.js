import { combineReducers } from "redux";
import movies_reducer from "./moviesReducer";


const rootReducer=combineReducers({
    movies_reducer
});
export default rootReducer;