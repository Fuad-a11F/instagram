import React from 'react'
import './hint.css'

function Hint({children}) {
    return (
        <div className='hint'>
            <div className="hint__content">
                {children}
            </div>
        </div>
    )
}

export default Hint
