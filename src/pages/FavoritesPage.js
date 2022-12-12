import { useState,useEffect } from "react";
import {connect} from "react-redux";
import Favourites from "../components/Favorites";
import { setCurrentUser, setUsers } from "../store/actions/actions";
import "../styles/favoritePage.css"
import { Button, Card, Col, Container, Nav, NavLink, Row } from "react-bootstrap";

const FavoritesPage = (props) => {
    const [favs,setFavs]=useState([]);
    const [currentUser,setCurrentUser]=useState();
    useEffect(()=>{
        setFavs(props.userReducer.currentUser.fav);
        setCurrentUser(props.userReducer.currentUser);
    },[])


    function handleDeleteAll(){

        updateUsers();
  
    }

    

    function updateUsers(){
        const users=props.userReducer.users;
        for(let i=0;i<users.length;i++){
            let user=users[i];
            if(user.email === currentUser.email){
                user.fav=[];
                users[i]=user;
                setCurrentUser(user);
                props.updateCurrentUser(user);
                localStorage.setItem("currentUser",JSON.stringify(user));
                setFavs([]);
            }
        }
        props.updateUsers(users);
        localStorage.setItem("users",JSON.stringify(users));
    }

    return ( 
        <div className="favsList">
            <div className="deleteContianer">
            <button className="deleteAll" onClick={handleDeleteAll}>Delete all</button>
            </div>
            {
                favs&& favs.length>0? favs.map(movie=>{
                    return <Favourites key={movie.id} movie={movie}/>
                }) : 
                <Container className="cont"><h1 className="noFav">No favorites</h1></Container>
            }
            
        </div>
     );
}
const mapStateToProps=(state)=>{
    return {
        userReducer:state.userReducer,
    }
}

const mapDispatcherToProps={
    updateCurrentUser:setCurrentUser,
    updateUsers: setUsers
}
export default connect (mapStateToProps,mapDispatcherToProps)(FavoritesPage);