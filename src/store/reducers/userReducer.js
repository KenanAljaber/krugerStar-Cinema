const default_user_reducer = {
    
    currentUser:null


}

const userReducer = (state = default_user_reducer, action) => {
    switch (action.type) {
      
        default:
            return state;
    }
}

export default userReducer;
