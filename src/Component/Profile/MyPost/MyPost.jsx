import React from "react";
import "./MyPost.css"
import Post from "./Post/Post";

const MyPost = (props) =>{


    let profileElement = props.profileData.map( profile =><Post messeges={profile.message} id={profile.id} likesCount={profile.likesCount} />)

    return(
        <div className="profileMyPost">

            <h2>MyPost</h2>

            {profileElement}

        </div>
    )
};

export default MyPost;