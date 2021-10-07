import {NavLink} from "react-router-dom";
import React from "react";
import "./../Dialogs.css";

const DialogItem = (props) =>{
    let  path = "/dialogs/" + props.id;

    return(
        <div className="dialogs">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;