import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navi = () => {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky = "top">
                <Navbar.Brand> Stock Movie APP </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <i className = "fas fa-heart pr-2"></i>
                        <span className="text-white">Dikih Arif Wibowo</span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
}

export default Navi;
