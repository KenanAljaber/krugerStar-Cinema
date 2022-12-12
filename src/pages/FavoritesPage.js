import { useState,useEffect } from "react";
import {connect} from "react-redux";
import Favourites from "../components/Favorites";
const FavoritesPage = (props) => {
    const [favs,setFavs]=useState([]);
    useEffect(()=>{
        setFavs(props.userReducer.currentUser.fav);
        console.log(favs);
    },[])
    return ( 
        <div className="favsList">
            {
                favs&& favs.map(movie=>{
                    return <Favourites movie={movie}/>
                })
            }
            
        </div>
     );
}
const mapStateToProps=(state)=>{
    return {
        userReducer:state.userReducer,
    }
}
export default connect (mapStateToProps)(FavoritesPage);