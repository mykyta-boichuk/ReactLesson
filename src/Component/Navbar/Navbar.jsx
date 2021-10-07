import React from "react";
import "./Navbar.css"
import {NavLink} from "react-router-dom";

const Navbar = (props) =>{
    return(
        <div className="navbar">
            <ul className="navbarListen">
                <li className="navbarListenItem"><NavLink to="/profile">Profile</NavLink></li>
                <li className="navbarListenItem"><NavLink to="/dialogs">Messages</NavLink></li>
                <li className="navbarListenItem">News</li>
                <li className="navbarListenItem">Music</li>
                <li className="navbarListenItem">Settings</li>
            </ul>
        </div> 
    )
};

export default Navbar;