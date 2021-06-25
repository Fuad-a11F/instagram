import React from 'react'
import { NavLink } from 'react-router-dom'
import './Profile.css'


function ProfileNav({nav, setNav, id, check_id_and_jwd_id}) {
    function profile_nav_active(item) {
        setNav((prev) => {
            return prev.map(obj => {
                return obj === item ? {...item, checked: true} : {...obj, checked: false}
            })
        })
        sessionStorage.setItem('item', item.title)
    }

    return (
        <div className='profileNav'>
            {check_id_and_jwd_id() ? 
            <>
                {nav.map((item, index) => {
                    return <div key={item.title} onClick={() => profile_nav_active(item)}><NavLink className={item.checked ? `profileNav__link ${index === 0  && ' first_item '} _active` : `profileNav__link ${index === 0  && ' first_item '}`} to={item.path.replace('id', id)}>{item.title}</NavLink></div>
                })}
            </> :
            <>
                <div key={nav[0].title} ><NavLink className='profileNav__link _active' to={nav[0].path.replace('id', id)}>{nav[0].title}</NavLink></div>
            </>
            }

        </div>
    )
}

export default ProfileNav
