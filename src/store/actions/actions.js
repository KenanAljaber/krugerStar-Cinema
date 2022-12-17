
export const FETCHED_MOVIES="data/FETCHED-MOVIES";
export const FILTERED_MOVIES="data/SEARCH_MOVIES";
export const CANCEL_SEARCH="data/CANCEL_SEARCH";

//favourites
export const ADD_FAVORITE="favorite/ADD";
export const DELETE_FAVORITE_BY_ID="favorite/DELETE";
export const DELETE_ALL_FAVORITE="favorite/DELETE_ALL"


//users
export const ADD_USER="user/ADD";
export const SET_USERS="user/SET-USERS";
export const SET_CURRENT_USER="user/LOGIN-USE";


//login/LOGOUT user
export const setCurrentUser=(currentUser)=>{
    return {
        type: SET_CURRENT_USER,
        payload: currentUser
    }
}

//set users list
export const setUsers=(users)=>{
    return {
        type: SET_USERS,
        payload: users
    }
}

//add user
export const addUser=(user)=>{
    return {
        type: ADD_USER,
        payload: user
    }
}

//to add movies to favorites
export const addFavorite=(movie)=>{
    return {
        type: ADD_FAVORITE,
        payload: movie
    }
}

//to delete movie by id from favorites
export const delteFavoriteById=(id)=>{
    return {
        type: DELETE_FAVORITE_BY_ID,
        payload: id
    }
}


//to delte all movies from favorites
export const deleteAllFavorites=(arr=[])=>{
    return {
        type: DELETE_ALL_FAVORITE,
        payload: arr
    }
}



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


