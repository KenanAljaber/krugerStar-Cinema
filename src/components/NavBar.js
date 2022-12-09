import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../style/nav.css"

function NavBar() {
    return (

        <>
            <Navbar expand="lg" className='Navbar'>
                <Container className=''>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="#home" className='itemsNav text-white-50'>NOMBRE</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="">
                            <Nav.Item>
                                <Nav.Link href="#home" className='itemsNav'>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link" className='itemsNav'>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#home" className='itemsNav'>My Favourites</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link" className='itemsNav'>Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <NavDropdown title={"Usuario"} id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
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