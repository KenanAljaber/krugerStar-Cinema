import { Button, Card, Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import "../styles/Favourite.css";
import { useState } from "react";

const Favourites = ({movie}) => {
   
    
    return (
        <>
            <Container className=" contenedorf ">
                <Card className="mt-5 bg-dark mb-5 ">
                    <Row className="  ">
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-2 d-flex justify-content-center">
                            <Card.Img
                                className="m-2"
                                variant="left"
                                src={movie.images.original}
                                height="300px"
                                width="300px"
                                style={{ objectFit: "cover" }}
                            ></Card.Img>
                        </Col>
                        <Col className="mx-4 mb-4  justify-content-center text-white">
                            <span className="d-flex "><h1>{movie.name}<h3 className="text-muted">Overall rating</h3></h1></span>
                            <p> &#9733; {movie.rating}/10</p>
                            <h4>Synopsis:</h4>
                            <b>{movie.summary}</b>
                            <br />
                            <Button type="button" id="watch" className="bg-light p-2 mt-3">
                                <a className='text-decoration-none' target="_blank" rel="noreferrer" href='' >&#x25BA; Watch</a>
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}



export default Favourites; 