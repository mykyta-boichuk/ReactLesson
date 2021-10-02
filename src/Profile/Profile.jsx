import React from 'react';
import "./Profile.css";
import Post from "./Post/Post";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    let profileData = [
        {id: 1 , message:"Hi, how are you ?", likesCount:17},
        {id: 2 , message:"How is your it-kamaytraIt's my first post", likesCount:11},
        {id: 3 , message:"YO", likesCount:7},
    ];

    let profileElements = profileData.map( profiles => <Post message={profiles.message} likesCount={profiles.likesCount}/>);

    return(
        <div className="profile">
            <ProfileInfo />

            MyProfil

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="profile__post">
                
                { profileElements }

            </div>
        </div>
    )
}

export default Profile;