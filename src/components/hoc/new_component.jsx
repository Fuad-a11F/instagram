import React from 'react'
import Header from '../Header/Header'

function new_component(Component) {
    return function(props) {
        return (
            <div>
                <Header /> 
                <Component {...props}/>
            </div>   
        )
    }
}

export default new_component
