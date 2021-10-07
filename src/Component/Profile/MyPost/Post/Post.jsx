import React from "react";
import "./Post.css"

const Post = (props) =>{
    return(
        <div className="profileMyPostPost">
            <img className="profileMyPostPostAvatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJzU3PqHs-wfuFoe5-WFVDhF3M6HFy43teA&usqp=CAU"/>
            <div>
                {props.messeges}
            </div>
            <div>
                <span>Like {props.likesCount}</span>
            </div>

        </div>
    )
};

export default Post;