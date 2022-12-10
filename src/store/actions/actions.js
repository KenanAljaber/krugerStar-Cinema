export const FETCHED_MOVIES="data/FETCHED-MOVIES";
export const FILTERED_MOVIES="data/SEARCH_MOVIES";
export const CANCEL_SEARCH="data/CANCEL_SEARCH";



//to fetch movies from the api
export const fetched_movies=(arr)=>{
        return {
            type: FETCHED_MOVIES,
            payload: arr
        }
}

//to search movies 
export const searchMovies=(arr)=>{
    return{
        type: FILTERED_MOVIES,
        payload: arr
    }
}

//to cancel the search 
export const cancelSearch=(arr)=>{
    return{
        type: CANCEL_SEARCH,
        payload: arr,
        searching : false
    }
}


