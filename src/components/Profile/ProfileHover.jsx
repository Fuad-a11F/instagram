import React from 'react'
import like from "./images/like.png";
import comment from "./images/comment.png";


function ProfileHover({likes, comments}) {
    return (
        <div className="hover">
          <img className="like" width='35' height='35' src={like} alt="" />
          <p className="like_p">{likes}</p>
          <img className="comment" src={comment} alt="" />
          <p className="comment_p">{comments}</p>
        </div>
    )
}

export default ProfileHover
