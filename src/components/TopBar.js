import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function TopBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="Instacart Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <Nav.Link style={{ color: "#343538", marginRight: "10px" }} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}



