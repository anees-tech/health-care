import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import logo from '../../images/logo-medicalife.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Medical Life</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#login">LogIn</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
