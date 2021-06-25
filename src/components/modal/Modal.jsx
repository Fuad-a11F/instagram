import React from 'react'
import './Modal.css'

function Modal({children, modal}) {
    return (
        <div className={modal ? 'modal_main' : 'modal_main none'}>
            <div className="modal_main__content">
                {children}
            </div>
        </div>
    )
}

export default Modal
