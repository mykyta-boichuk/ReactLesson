import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dialogs.css";

const Dialogs__tableItem__item = (props) =>{

    let path =  "/dialogs/" + props.id;
    return(
        <div className="dialogs__tableItem__item ">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className="messege">{props.message}</div>
    )
}

const Dialogs = () =>{
    return (
        <div className="dialogs">
            <div className="dialogs__tableItem">
                <Dialogs__tableItem__item name ="Dimych" id ="1"/>
                <Dialogs__tableItem__item name ="Andrey" id ="2"/>
                <Dialogs__tableItem__item name ="Sveta" id ="3"/>
                <Dialogs__tableItem__item name ="Sasha" id ="4"/>
                <Dialogs__tableItem__item name ="Viktor" id ="5"/>
                <Dialogs__tableItem__item name ="Valera" id ="6"/>
            </div>
            <div className="messages">
                <Message message="Hi"/>
                <Message message="How is your it-kamaytra"/>
                <Message message="YO"/>
                <Message message="YO"/>
                <Message message="YO"/>
                <Message message="YO"/>
              
            </div>
        </div>
    )            
}

export default Dialogs;