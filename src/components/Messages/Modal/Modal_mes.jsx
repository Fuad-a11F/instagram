import React from 'react'

function ModalMes({children}) {
    return (
        <div className='modal_mes'>
            <div className="modal_mes__wrapper">
                {children}
            </div>
        </div>
    )
}

export default ModalMes
