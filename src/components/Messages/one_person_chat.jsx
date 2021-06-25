import React from 'react'
import { NavLink } from 'react-router-dom'
import ava from './images/ava.jpg'

function One_person_chat({id}) {
    return (
        <NavLink to={'/dialoge/'+id} className='chat'>
            <img className='chat_img' src={ava} alt="" width='50' height='50' />
            <div className="chat_name">asdasd</div>
            <div className="chat_last_message">asdasd</div>
        </NavLink>
    )
}

export default One_person_chat
