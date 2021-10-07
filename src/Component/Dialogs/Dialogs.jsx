import React from "react";
import "./Dialogs.css"
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {


    let dialogElement = props.state.dialogData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )


    let massageElement = props.state.massagesData.map( massage =><Messages message={massage.message} id={massage.id}/> )

    return(
        <div className="dialogs">
            <div className="dialogsItem">

                {dialogElement}

            </div>
            <div className="messages">

                {massageElement}

            </div>
        </div>
    )
};

export default Dialogs;
