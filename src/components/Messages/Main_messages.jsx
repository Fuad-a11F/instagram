import React from 'react'
import sms_icon from './images/sms.png'
import Modal_send from './Modal/Modal_send'

function Main_messages({modal_message, setModal_message}) {
    return (
        <div  className='main__messages'>
            <img src={sms_icon} alt="" width='240' height='250'/>
            <p>Ваши сообщения</p>
            <p>Отправляйте личные фото и сообщения другу</p>
            <button onClick={() => setModal_message(true)}>Начать</button>
            {modal_message  && <Modal_send setModal_message={setModal_message}/>}
        </div>
    )
}

export default Main_messages
