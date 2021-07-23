import React from 'react'
import { NavLink } from 'react-router-dom'
import './Profile.css'


function ProfileNav({nav, id, check_id_and_jwd_id}) {

    return (
        <div className='profileNav'>
            {check_id_and_jwd_id() ? 
            <>
                {nav.map((item, index) => {
                    return <div key={item.title}><NavLink className={item.checked ? `profileNav__link ${index === 0  && ' first_item '} _active` : `profileNav__link ${index === 0  && ' first_item '}`} to={item.path.replace('id', id)}>{item.title}</NavLink></div>
                })}
            </> :
            <>
                <div key={nav[0].title} ><NavLink className='profileNav__link _active' to={nav[0].path.replace('id', id)}>{nav[0].title}</NavLink></div>
            </>
            }

        </div>
    )
}

export default React.memo(ProfileNav)
