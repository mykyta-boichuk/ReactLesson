import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    return(
        <div className="navbar">
            <ul className = "navbar__navigation">
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs"> Messages</NavLink></li>
                <li><NavLink to="/news">Nevs</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;