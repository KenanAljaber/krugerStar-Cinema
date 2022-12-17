import { ADD_USER, SET_CURRENT_USER, SET_USERS} from "../actions/actions";


const userReducer = (state = {
    users: [],
    currentUser: null
}, action) => {
    switch (action.type) {
        case SET_USERS:
            console.log("usersSet")
            return {
                ...state,
                users: action.payload
            }

        case ADD_USER:
            console.log("userAdded")
            return {
                ...state,
                users: state.users.push(action.payload)
            }
        case SET_CURRENT_USER:
            console.log("set current user")
            return {
                ...state,
                currentUser: action.payload
            }
      
        default:
            return state;
    }
}

export default userReducer;
