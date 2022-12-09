import { createStore } from 'redux'
import useMovies from "../hooks/useMovies";
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);
export default  store;
