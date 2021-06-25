import React from 'react'
import Modal_send from './Modal/Modal_send'

function Name({modal_message, setModal_message}) {
    return (
        <div  className='name__body'>
            <div className='name'>name name</div>
            <div className="name__send" onClick={() => setModal_message(true)}>we</div>
            {modal_message  && <Modal_send setModal_message={setModal_message}/>}
        </div>
    )
}

export default Name
