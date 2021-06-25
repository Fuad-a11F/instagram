import React from 'react'
import { NavLink } from 'react-router-dom'
import ModalAction from './modal/ModalAction'
import ModalProfile from './modal/ModalProfile'
import home_no from './images/home_no.png'
import home_yes from './images/home_yes.png'
import dialoge_no from './images/dialoge_no.png'
import dialoge_yes from './images/dialoge_yes.png'
import heart_no from './images/heart_no.png'
import heart_yes from './images/heart_yes.png'

function Navigation({setProfile, setAction, action, profile}) {

    function setModalOpen(func, obj) {
        setAction(false)
        setProfile(false)
        func(!obj)
    }

    return (
        <div className='header__column nav__row'>
            <NavLink className='item' to='/'><img src={home_no} alt="" width='25' height='25'/></NavLink>
            <NavLink className='item' to='/dialoge'><img src={dialoge_no} alt="" width='25' height='25'/></NavLink>
            <span className='item' onClick={() => setModalOpen(setAction, action)}><img src={heart_no} alt="" width='25' height='25'/></span>
            {action && <ModalAction />}
            {profile && <ModalProfile />}
            <span className='item' onClick={() => setModalOpen(setProfile, profile)}>ор</span>
        </div>
    )
}

export default Navigation
