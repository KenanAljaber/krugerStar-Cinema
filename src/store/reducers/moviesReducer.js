import { ADD_FAVORITE, CANCEL_SEARCH, FETCHED_MOVIES, FILTERED_MOVIES } from "../actions/actions";

const default_movies_reducer = {
    finished: false,
    data: [],
    filteredData: [],
    fav: [],
    searching: false,


}

const movies_reducer = (state = default_movies_reducer, action) => {
    switch (action.type) {
        case FETCHED_MOVIES:
            console.log("data/fetchMovies")
            return {
                ...state,
                data: action.payload,
                finished: true,
            };
        case FILTERED_MOVIES:
            console.log("data/SEARCHmOVIES")
            return {
                ...state,
                filteredData: action.payload,
                searching: true
            }
        case CANCEL_SEARCH:
            return {
                ...state,
                filteredData: action.payload,
                searching: false
            }
        case ADD_FAVORITE:
            console.log("favorite/addFav")
            return {
                ...state,
                fav: state.fav.push(action.payload)
            }
        default:
            return state;
    }
}

export default movies_reducer;

