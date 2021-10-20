import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import logo from '../../images/logo-medicalife.png'
import { HashLink } from 'react-router-hash-link';
import useAuth from "../hooks/useAuth";
import './NavBar.css';

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">Medical Life</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutUs">AboutUs</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        {user?.email ?
                            <>
                                <p className="user_display_name">{user.displayName || user.email} -</p>
                                <Nav.Link onClick={logOut} as={HashLink} to="/logIn" className="login">LogOut</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as={HashLink} to="/logIn" className="login">LogIn</Nav.Link>
                                <Nav.Link as={HashLink} to="/register" className="register">Register</Nav.Link>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
