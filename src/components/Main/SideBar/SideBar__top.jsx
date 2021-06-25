import React from 'react'
import './SideBar.css'
import ava from '../../Messages/images/ava.jpg'

function SideBar__top() {
    return (
        <div className='SideBar__top'>
            <div className='SideBar__top__picture'>
                <img className='SideBar__top__ava' width='55' height='55' src={ava} alt="" />
            </div>
            <div className='SideBar__top__login'>fdhjff  dsiafjb</div>
            <div className='SideBar__top__name'>2324565</div>
        </div>
    )
}

export default SideBar__top
