import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_USER_TOP } from '../../GraphQl/Queries'
import none_image from '../../none.jpg'
import './Profile.css'
import ProfileTopInfo from './ProfileTopInfo'
import MyLoader from './ProfileTopLoader'
import MyLoader2 from './profileTopLoader_2'

function ProfileTop({id, check_id_and_jwd_id}) {
    let {error, loading, data, refetch} = useQuery(GET_USER_TOP, {variables: {id: id}})
    let [userTopData, setUserTopData] = React.useState()

    React.useEffect(() => {
        if (data) setUserTopData(data.getUserTop);
    }, [data])

    return (
        <>            
        {userTopData ? 
            <div className='profileTop'>
                <div >   
                    <img className='profileTop__ava' src={userTopData.image_url ? userTopData.image_url : none_image} alt="" />
                </div>
                <ProfileTopInfo id={id} refetch={refetch} check_id_and_jwd_id={check_id_and_jwd_id} userTopData={userTopData}/>
            </div>
            :
            <div className='profileTop'>
                <div className='profileTop__loader'>
                    <MyLoader />
                    <MyLoader2 />
                </div>    
            </div>     
        }
        </>
       
    )
}

export default ProfileTop
