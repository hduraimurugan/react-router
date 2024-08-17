import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCl() {
    const [activeLink, setActiveLink] = useState('/');
    const [expanded, setExpanded] = useState(false);

    const toggleClass = (path) => {
        setActiveLink(path);
        setExpanded(false); // Close the navbar when a link is clicked
    };

    return (
        <Navbar expand="lg" className="navbar navbar-fixed-top fixed-top navbar-expand-lg navbar-light bg-light shadow-lg" expanded={expanded}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-nav p-3">
                        <NavLink 
                            className={activeLink === '/' ? 'active nav-link' : 'nav-link'} 
                            onClick={() => toggleClass('/')} 
                            to="/"
                        >
                            ALL
                        </NavLink>
                        
                        <NavLink 
                            className={activeLink === '/fullstack' ? 'active nav-link' : 'nav-link'} 
                            onClick={() => toggleClass('/fullstack')} 
                            to="/fullstack"
                        >
                            FULL STACK DEVELOPMENT
                        </NavLink>
                        
                        <NavLink 
                            className={activeLink === '/datascience' ? 'active nav-link' : 'nav-link'} 
                            onClick={() => toggleClass('/datascience')} 
                            to="/datascience"
                        >
                            DATA SCIENCE
                        </NavLink>   
                        
                        <NavLink 
                            className={activeLink === '/cybersecurity' ? 'active nav-link' : 'nav-link'} 
                            onClick={() => toggleClass('/cybersecurity')} 
                            to="/cybersecurity"
                        >
                            CYBER SECURITY
                        </NavLink>
                        
                        <NavLink  
                            className={activeLink === '/career' ? 'active nav-link' : 'nav-link'} 
                            onClick={() => toggleClass('/career')} 
                            to="/career"
                        >
                            CAREER
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCl;
