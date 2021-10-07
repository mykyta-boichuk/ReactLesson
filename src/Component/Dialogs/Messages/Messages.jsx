import React from "react";
import "./../Dialogs.css"
import "./Messages.css";

const  Messages = (props) =>{
    return(
        <div className="dialogs">{props.message}</div>

    )
};

export default Messages;