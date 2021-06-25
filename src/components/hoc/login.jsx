import React from 'react'
import {Redirect} from 'react-router-dom'

function login(Component) {
    return function(props) {
        
        if (localStorage.getItem('token') === null) {
            return <Redirect to="/login" />
        }

        return <Component {...props}/>
    }    
}

export default login
