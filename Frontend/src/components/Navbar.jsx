import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand navbar-light bg-dark' data-bs-theme = 'dark'>
        <div className='container'>
        <NavLink className='navbar-brand' to= '/'>
            Z Shop
        </NavLink>
        <button className='navbar-toggler' 
            type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
        
        <span className='navbar-toggler-icon'></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ms-auto">
                
                <li class="nav-item">
                <NavLink className='nav-link' to = '/' exact activeClassName = 'active'>Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink className='nav-link' to = '/about' exact activeClassName = 'active'>About</NavLink>
                </li>
                <li class="nav-item">
                <NavLink className='nav-link' to = '/contact' exact activeClassName = 'active'>Contact</NavLink>
                </li>
            </ul>
      
    </div>
        </div>
        </nav>
    );
};

export default Navbar;