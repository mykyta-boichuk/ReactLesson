import React from 'react';
import './Navbar.css';

const Navbar = () =>{
    return(
        <div className="navbar">
            <ul className = "navbar__navigation">
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </div>
    )
}

export default Navbar;