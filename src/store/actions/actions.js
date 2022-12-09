export const FETCHED_MOVIES="data/FETCHED-MOVIES";
export const FILTERED_MOVIES="data/SEARCH_MOVIES";
export const CANCEL_SEARCH="data/CANCEL_SEARCH";

export const fetched_movies=(arr)=>{
        return {
            type: FETCHED_MOVIES,
            payload: arr
        }
}

export const searchMovies=(arr)=>{
    return{
        type: FILTERED_MOVIES,
        payload: arr
    }
}

export const cancelSearch=(arr)=>{
    return{
        type: CANCEL_SEARCH,
        payload: arr
    }
}
