import React from 'react'
import PropTypes from 'prop-types';

function Modal({children, classes}) {
    return (
        <div className={'modal ' + classes}>
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}

Modal.propTypes ={
    classes: PropTypes.string    
}

export default Modal
