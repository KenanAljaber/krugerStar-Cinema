import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../styles/nav.css"
import krugerLogo from "../assets/krugerLogo.png"
import {connect} from "react-redux"
import { setCurrentUser } from '../store/actions/actions';


function NavBar(props) {

    const logout=()=>{
        console.log("loging out")
        props.setCurrentUser(null);
        localStorage.removeItem("currentUser");
    }

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
                                <Link to="/favourites" className="itemsNav">My Favourites </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/about-us" className="itemsNav">About Us </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/contact" className="itemsNav">Contact </Link>
                            </Nav.Item>
                            <Nav.Item >
                                <NavDropdown title={props.userReducer.currentUser.name} className="basic-nav-dropdown" >
                                   
                                    <Link to="/login" className="" onClick={logout}> <NavDropdown.Item>
                                        Logout 
                                    </NavDropdown.Item></Link>
                                </NavDropdown>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}
const mapStateToProps=(state)=>{
    return {
        userReducer:state.userReducer
    }
}
const mapDispatcherToProps={
    setCurrentUser: setCurrentUser,
}
export default connect(mapStateToProps,mapDispatcherToProps)(NavBar);