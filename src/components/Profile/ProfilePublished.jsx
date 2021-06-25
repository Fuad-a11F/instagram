import Hint_Component from '../hint/Hint_Component'
import React from 'react'
import ProfilePublishedWrapper from './ProfilePublishedWrapper'

function ProfilePublished({id, check_id_and_jwd_id}) {
    return (
        <div>
            {check_id_and_jwd_id() && <Hint_Component />}
            <ProfilePublishedWrapper id={id}/>
        </div>
    )
}

export default ProfilePublished
