import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/PageDetails.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PageDetails = (props) => {
    const id=useParams("id:").id.substring(3);
    const [currentMovie,setCurrentMovie]=useState(null);
    
        useEffect(()=>{

                setCurrentMovie(findMovieByID(id,JSON.parse(localStorage.getItem("movies"))));
                
        },[])
        function findMovieByID(id,data){
                
                const  movie= data.find(element=> element.id===id);
                return movie;
        }

        function getStarsFromRating(rating){
                let stars="";
                for(let i=0;i<rating;i++){
                    stars=stars+`&#9733;` 
                }
                //getStarsFromRating(currentMovie.rating)
                return stars;
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
                                    <Button className="bg-danger p-2 m-2"  >+ Add to favorites</Button>

                                </Col>
                                <div className="backBtnContainer">
                                <Link to="/"> <Button className="backButton" >Back</Button></Link>
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
    };
}
export default connect(mapPropsToParams)(PageDetails);