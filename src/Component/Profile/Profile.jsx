import React from "react";
import "./Profile.css"
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    return(
        <div className="profile">
            <ProfileInfo />
            <MyPost profileData={props.state.profileData} />

        </div>
    )
};

export default Profile;