import { useEffect, useRef } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {  useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/PageDetails.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, setCurrentUser, setUsers } from "../store/actions/actions";

const PageDetails = (props) => {
    const id=useParams("id:").id.substring(3);
    const [currentMovie,setCurrentMovie]=useState(null);
    const [favoriteText,setFavoriteText]=useState("");
    const [currentUser,setCurrentUser]=useState(null);
    const favRef=useRef(null);
    
   
        useEffect(()=>{
                
                setCurrentMovie(findMovieByID(id,JSON.parse(localStorage.getItem("movies"))));
                setCurrentUser(props.userReducer.currentUser);
              
                if(currentUser){
                    isMovieFavorite();
                }
               
                
        },[currentUser,favoriteText])
        function findMovieByID(id,data){
                
                const  movie= data.find(element=> element.id===id);
                return movie;
        }

        function isMovieFavorite(){
          for (let i=0;i<currentUser.fav.length;i++){
                const currFav= currentUser.fav[i];
                if(currFav.id === currentMovie.id){
                        changeFavBtn(true);
                        return;
                }
            }
          changeFavBtn(false);
        }

        function changeFavBtn(isFavorite){
                if(isFavorite){
                    setFavoriteText(currentMovie.name+" is in your favorite ❤️");
                    favRef.current.disabled=true;
                }else{
                    setFavoriteText("+ Add to favorite");
                    favRef.current.disabled=false;
                }
        }

        function addToFavorite(){
            const updatedUser=currentUser;
            updatedUser.fav.unshift(currentMovie);
            props.updateCurrentUser(updatedUser);
            setCurrentUser(updatedUser);
            changeFavBtn(true);
            localStorage.setItem("currentUser",JSON.stringify(currentUser));
            modifyUsersList();
        }

        function modifyUsersList(){
                
               const users=props.userReducer.users;
                for(let i=0;i<users.length;i++){
                    const user=users[i];
                    if(user.email===currentUser.email){
                        users[i]=currentUser;
                    }
                }
                props.updateUsers(users);
               localStorage.setItem("users",JSON.stringify(users));
        }

    return (
        <>
        { currentMovie&&
            <Container className="mw-100">
                <Row className="movieDetails justify-content-md-center">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Image src={currentMovie.images.original} className="DetailsImg" rounded />
                    </Col >
                    <Col xs={12} sm={12} md={7} lg={7} xl={7} className=''>
                        <Container className="justify-content-center mx-auto">
                            <Row >
                                <Col className="DetailsTitle">
                                    <h1>{currentMovie.name}</h1>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col>
                                    <h4>Overall rating</h4>
                                    <h4><b className="text-danger">&#9733; {currentMovie.rating}/10</b></h4>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col>
                                    <h4>Synopsis:</h4>
                                    <b>{currentMovie.summary}</b>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col >
                                    <h6>Geners: {currentMovie.geners}</h6>
                                    <h6>Language: {currentMovie.language}</h6>
                                    <h6>End Date: {currentMovie.endDate}</h6>
                                    <Button type="button" id="watch" className="bg-light p-2 ">
                                        <a className='text-decoration-none' target="_blank" rel="noreferrer" href={currentMovie.officialSite} >&#x25BA; Watch</a>
                                    </Button>
                                    <Button className="bg-danger p-2 m-2" ref={favRef}  onClick={addToFavorite}>{favoriteText}</Button>

                                </Col>
                                <div className="backBtnContainer">
                                <Link to="/home"> <Button className="backButton" >Back</Button></Link>
                                </div>
                                
                            </Row>
                            
                        </Container>
                        
                    </Col>
                </Row>
            </Container>
            }
        </>
    );
}

const mapPropsToParams=(state)=>{
    return{
        moviesReducer: state.movies_reducer,
        userReducer: state.userReducer
    };
}

const mapDispatcherToProps={
    addFav: addFavorite,
    updateCurrentUser:setCurrentUser,
    updateUsers:setUsers
}
export default connect(mapPropsToParams,mapDispatcherToProps)(PageDetails);