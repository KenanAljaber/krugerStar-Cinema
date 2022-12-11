import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../styles/nav.css"
import krugerLogo from "../assets/krugerLogo.png"

function NavBar() {
    return (

        <>
            <Navbar expand="lg" className='Navbar '>
                <Container className=''>
                    <Nav>
                        <Nav.Item >
                            <Link to="/">
                                <Navbar.Brand className="titleName"><img src={krugerLogo} width="50px"/></Navbar.Brand>
                            </Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="">
                            <Nav.Item>
                                <Link to="/home" className="itemsNav">Home </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/about-us" className="itemsNav">About Us </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/favourites" className="itemsNav">My Favourites </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/contact" className="itemsNav">Contact </Link>
                            </Nav.Item>
                            <Nav.Item >
                                <NavDropdown title={"Usuario"} className="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/" className="">Logout </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default NavBar;