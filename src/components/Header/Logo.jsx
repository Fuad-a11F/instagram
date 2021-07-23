import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
    return (
        <div className='header__column'>
            <NavLink to='/' className='logo'>INSTAGRAM</NavLink>  
        </div>
    )
}

export default React.memo(Logo)
