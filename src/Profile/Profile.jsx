import React from 'react';
import "./Profile.css";
import Post from "./Post/Post";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return(
        <div className="profile">
            <ProfileInfo />

            MyProfil

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="profile__post">
                <Post message='Hi, how are you ?' />
                <Post message="It's my first post" />
            </div>
        </div>
    )
}

export default Profile;