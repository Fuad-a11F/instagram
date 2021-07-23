import React from 'react'
import ProfileTopInfo from './ProfileTopInfo'
import none_image from '../../none.jpg'

function ProfileHeader({userTopData, refetch, id, check_id_and_jwd_id}) {
    return (
        <div className='profileTop'>
            <div >   
                <img className='profileTop__ava' src={userTopData.image_url ? userTopData.image_url : none_image} alt="" />
            </div>
            <ProfileTopInfo id={id} refetch={refetch} check_id_and_jwd_id={check_id_and_jwd_id} userTopData={userTopData}/>
        </div>
    )
}

export default React.memo(ProfileHeader)
