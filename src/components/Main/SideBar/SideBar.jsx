import React from 'react'
import SideBar__footer from './SideBar__footer'
import SideBar__main from './SideBar__main'
import SideBar__top from './SideBar__top'

function SideBar() {
    return (
        <div className='side__bar'>
            <SideBar__top />
            <SideBar__main  />
            <SideBar__footer sideBar={false}/>
        </div>
    )
}

export default SideBar
