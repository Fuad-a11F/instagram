import React from 'react'
import SideBar__recom__items from './SideBar__recom__items'

function SideBar__main() {
    return (
        <div className='SideBar__main'>
            <div className="SideBar__main__top">
                <p>Рекомендации для вас</p>
                <button>Все</button>
            </div>
            <SideBar__recom__items />
            <SideBar__recom__items />
            <SideBar__recom__items />
            <SideBar__recom__items />
            <SideBar__recom__items />
        </div>
    )
}

export default SideBar__main
