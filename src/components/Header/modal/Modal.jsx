import React from 'react'

function Modal({children, classes}) {
    return (
        <div className={'modal ' + classes}>
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}

export default Modal
