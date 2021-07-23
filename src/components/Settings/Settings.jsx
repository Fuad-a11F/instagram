import React from 'react'
import login from '../hoc/login'
import new_component from '../hoc/new_component'
import SettingMain from './SettingMain'
import './Settings.css'
import SettingsSiteBar from './SettingsSiteBar'
import SideBar__footer from '../Main/SideBar/SideBar__footer'
import SettingChange from './SettingChange'
import SettingSave from './SettingSave'

function Settings() {
    let location = window.location.pathname
    return (
        <div className="container">
            <div className='settings__grid'>
                <SettingsSiteBar />
                {location.includes('main') && <SettingMain />}
                {location.includes('change') && <SettingChange />}
                {location.includes('save') && <SettingSave />}
                
            </div>
            <SideBar__footer sideBar={true}/>
        </div>
    )
}

export default new_component(login(Settings))
