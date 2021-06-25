import React from 'react'
import ProfileHover from "./ProfileHover";

function ProfilePublishedItem({photo, likes, comments, setModal,setPostId, id}) {
    function openInfo() {
        setModal(true)
        setPostId(id)
    }
    return (
        <div className="grid__body" onClick={() => openInfo()}>
            <ProfileHover likes={likes} comments={comments}/>
            <img src={photo} alt="" />
        </div>
    )
}

export default ProfilePublishedItem
