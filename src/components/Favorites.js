import { Button, Card, Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import "../styles/Favourite.css";
import { useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser, setUsers } from "../store/actions/actions";

const Favourites = ({movie,userReducer,updateCurrentUser,setUsers}) => {

    function handleDeleteFav(){
       updateUsers();
    }
    
    function updateUsers(){
        const users=userReducer.users;
        const currentUser=userReducer.currentUser;
        for(let i=0;i<users.length;i++){
            let user=users[i];
            if(user.email === currentUser.email){
                const updatedFav=deleteFav(user.fav);
                currentUser.fav=updatedFav;
                user.fav=updatedFav;
                updateCurrentUser(user);
                localStorage.setItem("currentUser",JSON.stringify(user));
                break;
                
            }
        }
        setUsers(users);
        localStorage.setItem("users",JSON.stringify(users));
    }

    function deleteFav(fav){
        
        for(let i=0;i<fav.length;i++){
                const currMovie=fav[i];
                if(currMovie.id===movie.id){
                    
                    fav.splice(i, 1);
                    
                }
        }
        return fav;
    }
    
    return (
        <>
            <Container className=" contenedorf ">
                <Card className="mt-5 bg-dark mb-5 ">
                    <Row className="  ">
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-2 d-flex justify-content-center">
                            <Card.Img
                                className="m-2 imageF"
                                variant="left"
                                src={movie.images.original}
                            ></Card.Img>
                        </Col>
                        <Col className="mx-4 mb-4  justify-content-center text-white">
                        <div className="d-flex justify-content-between">
                        <span className="d-flex "><h1>{movie.name}<h3 className="text-muted">Overall rating</h3></h1></span>

                                <Button type="button" id="watch" className="bg-danger p-2 mt-3" onClick={handleDeleteFav}>
                                    <a className='text-decoration-none text-light'  rel="noreferrer" href='#' >Delete</a>
                                </Button>
                            </div>
                          
                            <p> &#9733; {movie.rating}/10</p>
                            <h4>Synopsis:</h4>
                            <b>{movie.summary}</b>
                            <br />
                            <Button type="button" id="watch" className="bg-light p-2 mt-3">
                                <a className='text-decoration-none' target="_blank" rel="noreferrer" href={movie.officialSite} >&#x25BA; Watch</a>
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

const mapStateToProps=(state)=>{
   return {
    userReducer:state.userReducer,
   } 
}
const mapDispatcherToProps={
    updateCurrentUser:setCurrentUser,
    setUsers:setUsers,
}

export default connect(mapStateToProps,mapDispatcherToProps)(Favourites); 