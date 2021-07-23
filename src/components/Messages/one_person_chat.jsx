import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'  
import none_icon from '../../none.jpg'

function One_person_chat({item, active}) {


    return (
        <NavLink to={'/dialoge/'+item.id} className={active ? 'chat chat__active' : 'chat' }>
            <img className='chat_img' src={item.image_url ? item.image_url : none_icon} alt="" width='50' height='50' />
            <div className="chat_name">{item.name}</div>
            {/* <div className="chat_last_message">as dasd</div> */}
        </NavLink>
    )
}

export default One_person_chat
