import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_USER_CHAT } from '../../GraphQl/Queries'
import none_icon from '../../none.jpg'
import Modal_info from './Modal/Modal_info'
import more_setting from './images/more_setting.png'
import {NavLink} from 'react-router-dom'

function Name_dialoge({id, refetch_chat, user_block}) {
    let [modal, setModal] = React.useState(false)
    let {error, loading, data} = useQuery(GET_USER_CHAT, {variables: {id}})
    let [userInfo, setUserInfo] = React.useState()

    React.useEffect(() => {
        if (data) setUserInfo(data.getUserChat);
    }, [data])
    
    return (
        <div  className='name__body'>
            {userInfo && (
                <>
                <div className='info_name-body'>
                    <img src={userInfo.image_url ? userInfo.image_url : none_icon} alt="" />
                    <NavLink style={{textDecoration:'none', color: 'black'}} to={"/profile/"+userInfo.id}><div className='name'>{userInfo.name}</div></NavLink>
                </div>
                <div className="name__send" onClick={() => setModal(true)}><img src={more_setting} width='20' height='20' alt="" /> </div>
                {modal && <Modal_info id={id} user_block={user_block} refetch_chat={refetch_chat} setModal={setModal}/>}
            </>
            )}
        </div>       
    )
}

export default Name_dialoge
