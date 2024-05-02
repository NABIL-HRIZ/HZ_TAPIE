import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css'
const CustomNavbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('acceil');

    return (
        <Navbar expand="lg" className='navbar'>
            <Navbar.Brand href="/" className='brand'>HZ_TAPIE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="links">
                    <Nav.Link as={Link} to="/" onClick={() => setMenu('acceil')} className={menu === 'acceil' ? 'active' : ''}>Acceil</Nav.Link>
                    <Nav.Link as={Link} to="/aboutUs" onClick={() => setMenu('aboutus')} className={menu === 'aboutus' ? 'active' : ''}>A Propos De Nous</Nav.Link>
                    <Nav.Link as={Link} to="/contactUs" onClick={() => setMenu('contactus')} className={menu === 'contactus' ? 'active' : ''}>Contactez-nous</Nav.Link>
                </Nav>
                <Nav>
                    <button onClick={() => setShowLogin(true)} className="glowing-btn">Signup</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
