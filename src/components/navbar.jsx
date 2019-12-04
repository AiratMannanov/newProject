import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light br-light">
            <a className="navbar-brand" href="">Navbar
             <span className="badge badge-pill badge-secondary m-2">{totalCounters}</span>
            </a>
        </nav>
     );
}

 
export default NavBar;