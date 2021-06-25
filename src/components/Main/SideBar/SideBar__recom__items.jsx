import React from 'react'
import ava from '../../Messages/images/ava.jpg'

function SideBar__recom__items() {
    return (
        <div className='SideBar__recom__items__row'>
            <div className='SideBar__recom__items'>
                <div className='SideBar__recom__items__picture'>
                    <img className='SideBar__recom__items__ava' width='40' height='40' src={ava} alt="" />
                </div>
                <div className='SideBar__recom__items__login'>fdhjff  dsiafjb</div>
                <div className='SideBar__recom__items__name'>2324565</div>
            </div>
            <div>
                <button className='SideBar__recom__items__subscribe '>Подписаться</button> {/*   subscribed */}
            </div> 
        </div>

    )
}

export default SideBar__recom__items
