import React from 'react'
import ModalMes from './Modal_mes'


function Modal_send({setModal_message}) {
    return (
        <ModalMes>
            <div className='modal_mes__content'>
                <div className='modal_mes__messages'>
                    <p className='close' onClick={() => setModal_message(false)}>X</p>
                    <p className='new_message'>Новое сообщение</p>
                    <button className='next'>Далее</button>
                </div>
                <hr />
                <div className="modal_mes__messages">
                    <p className='address'>Кому:</p><input className='input_long' autoFocus={true} type="text" placeholder='Поиск...' />
                </div>
                <hr />
                <div className="modal_mes__messages">
                    <p className='recomended'>Рекомендуемые</p>
                </div>
            </div>      
        </ModalMes>
    )
}

export default Modal_send
