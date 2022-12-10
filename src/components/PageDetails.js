import { Row, Col, Container, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "../styles/PageDetails.css"
const PageDetails = () => {

const estrellas = "&#9733; &#9733; &#9733; &#9733;";
    return (
        <>
            <Container className="mw-100">
                <Row className="movieDetails justify-content-md-center">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Image src={'https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'} className="DetailsImg" rounded />
                    </Col >
                    <Col xs={12} sm={12} md={7} lg={7} xl={7} className=''>
                        <Container className="justify-content-center mx-auto">
                            <Row >
                                <Col className="DetailsTitle">
                                    <h1>TITULO</h1>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col>
                                    <h4>Overall rating</h4>
                                    <h4><b className="text-danger"> &#8902;</b></h4>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col>
                                    <h4>Synopsis:</h4>
                                    <b>Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.</b>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col >
                                    <h6>Release date: </h6>
                                    <h6>Duration: min</h6>
                                    <Button type="button" id="watch" className="bg-light p-2 ">
                                        <a className='text-decoration-none' target="_blank" rel="noreferrer" href='' >&#x25BA; Watch</a>
                                    </Button>
                                    <Button className="bg-danger p-2 m-2" onClick=''>+ Add to favorites</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PageDetails;