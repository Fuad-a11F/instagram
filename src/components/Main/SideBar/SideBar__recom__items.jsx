import React from 'react'
import ava from '../../Messages/images/ava.jpg'

function SideBar__recom__items() {
    return (
        <div className='SideBar__recom__items__row'>
            <div className='SideBar__recom__items'>
                <div className='SideBar__recom__items__picture'>
                    <img className='SideBar__recom__items__ava' width='40' height='40' src={ava} alt="" />
                </div>
                <div className='SideBar__recom__items__login'>тест тест</div>
                <div className='SideBar__recom__items__name'>тест</div>
            </div>
            <div>
                <button className='SideBar__recom__items__subscribe '>Подписаться</button> {/*   subscribed */}
            </div> 
        </div>

    )
}

export default SideBar__recom__items
