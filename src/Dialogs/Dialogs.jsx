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

    let dialogData = [
        {id: 1 , name:"Dimych"},
        {id: 2 , name:"Andrey"},
        {id: 3 , name:"Sveta"},
        {id: 4 , name:"Sasha"},
        {id: 5 , name:"Viktor"},
        {id: 6 , name:"Valera"},
    ];
    
    let dialogsElements = dialogData.map( dialog =>  <Dialogs__tableItem__item name ={dialog.name} id ={dialog.id}/>);
    
    let massagesData = [
        {id: 1 , message:"Hi"},
        {id: 2 , message:"How is your it-kamaytra"},
        {id: 3 , message:"YO"},
        {id: 4 , message:"YO"},
        {id: 5 , message:"YO"},
        {id: 6 , message:"YO"},
    ];

    let massagesElements = massagesData.map( massages => <Message message={massages.message}/>);

    return (
        <div className="dialogs">
            <div className="dialogs__tableItem">
                
                {dialogsElements}
           
            </div>
            <div className="messages">

                { massagesElements }
                
            </div>
        </div>
    )            
}

export default Dialogs;