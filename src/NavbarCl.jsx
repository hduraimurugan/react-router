import React from 'react'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



const NavbarCl = () => {
    const [activeLink, setActiveLink] = useState('/');

    const toggleClass = (path) => {
        setActiveLink(path);
    };

    return (

        <div>
            <nav className="navbar navbar-fixed-top fixed-top navbar-expand-lg navbar-light bg-light shadow-lg">

                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        aria-controls="collapsibleNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar" >
                        <ul className="navbar-nav p-3" >

                            <li className="nav-item px-2">
                                <Link
                                    className={activeLink === '/' ? 'active activee nav-link' : 'nav-link'}
                                    onClick={() => toggleClass('/')}
                                    to="/"
                                >
                                    ALL
                                </Link>
                            </li>

                            <li className="nav-item px-2">
                                <Link
                                    className={activeLink === '/fullstack' ? 'active activee nav-link' : 'nav-link'}
                                    onClick={() => toggleClass('/fullstack')}
                                    to="/fullstack"
                                >
                                    FULL STACK DEVELOPMENT
                                </Link>
                            </li>

                            <li className="nav-item px-2">
                                <Link
                                    className={activeLink === '/datascience' ? 'active activee nav-link' : 'nav-link'}
                                    onClick={() => toggleClass('/datascience')}
                                    to="/datascience"
                                >
                                    DATA SCIENCE
                                </Link>
                            </li>

                            <li className="nav-item px-2">
                                <Link
                                    className={activeLink === '/cybersecurity' ? 'active activee nav-link' : 'nav-link'}
                                    onClick={() => toggleClass('/cybersecurity')}
                                    to="/cybersecurity"
                                >
                                    CYBER SECURITY
                                </Link>
                            </li>

                            <li className="nav-item px-2">
                                <Link
                                    className={activeLink === '/career' ? 'active activee nav-link' : 'nav-link'}
                                    onClick={() => toggleClass('/career')}
                                    to="/career"
                                >
                                    CAREER
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default NavbarCl;

