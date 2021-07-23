import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_MESSAGE, MAKE_READ } from '../../GraphQl/Queries'
import { func } from '../Header/refetch'
import EmptyMessage from './emptyMessage'


function Dialoge_messages({message, id, refetch}) {
    let dialoge_ref = React.useRef()
    let [deleteMessage] = useMutation(DELETE_MESSAGE)
    let [makeRead] = useMutation(MAKE_READ)
    React.useEffect(() => {
        dialoge_ref.current.scrollTop = dialoge_ref.current.scrollHeight
    }, [message])
    React.useEffect(async () => {
        await makeRead({variables: {token: localStorage.getItem('token'), send_id: id}})
        func()
    }, [])
    function show_btn(e) {
            e.target.closest('.message__body').firstElementChild.firstElementChild.nextElementSibling.classList.add('show_me')
    }
    function close_btn(e) {
        if (!e.target.closest('.message__body').firstElementChild.lastElementChild.classList.contains('modal_message_open')) {
            e.target.closest('.message__body').firstElementChild.firstElementChild.nextElementSibling.classList.remove('show_me')
        }
    }
    function show_btn_1(e) {
            e.target.closest('.message__body').firstElementChild.firstElementChild.nextElementSibling.classList.add('show_me')
    }
    function close_btn_1(e) {
        if (!e.target.closest('.message__body').firstElementChild.firstElementChild.classList.contains('modal_message_open')) {
            e.target.closest('.message__body').firstElementChild.firstElementChild.nextElementSibling.classList.remove('show_me')
        }
    }
    async function delete_message(id_mes) {
        await deleteMessage({variables: {id: id_mes}})
        refetch()
    }

    return (
        <div ref={dialoge_ref} className='dialoge__messages'>
            {message.length === 0 && 
                <>
                    <EmptyMessage />
                </>
            }
            {message.map(item => {
                if (item.user_id ===  id) {
                    if (item.is_image) {
                        return (
                            <div key={item.id} onMouseEnter={e => show_btn(e)} onMouseLeave={e => close_btn(e)} className='message__someone message__body'>           
                                <div className='modal_wrapper_mes'>
                                    <div className='image__wrapper'><img src={item.text} alt="" /></div>
                                    <button className='none_btn' onClick={(e) => e.target.nextElementSibling.classList.toggle('modal_message_open')}>...</button> 
                                    <div className='modal_message '>
                                        <ul>
                                            <li onClick={() => delete_message(item.id)}>Удалить</li>
                                        </ul>
                                    </div>                                      
                                </div>
                            </div>  
                        )
                    }
                    else 
                        return (
                            <div key={item.id} onMouseEnter={e => show_btn(e)} onMouseLeave={e => close_btn(e)} className='message__someone message__body'>           
                                <div className='modal_wrapper_mes'>
                                    <p>{item.text}</p> 
                                    <button className='none_btn' onClick={(e) => e.target.nextElementSibling.classList.toggle('modal_message_open')}>...</button> 
                                    <div className='modal_message '>
                                        <ul>
                                            <li onClick={() => delete_message(item.id)}>Удалить</li>
                                        </ul>
                                    </div>                                      
                                </div>
                            </div>
                        )
                }
                else {
                    if (item.is_image) {
                        return (
                            <div key={item.id} onMouseEnter={e => show_btn_1(e)} onMouseLeave={e => close_btn_1(e)} className='message__me message__body'>
                                <div className='modal_wrapper_mes'>
                                    <div className='modal_message'>
                                        <ul>
                                            <li onClick={() => delete_message(item.id)}>Удалить</li>
                                        </ul>
                                    </div>
                                    <button onClick={(e) => e.target.previousElementSibling.classList.toggle('modal_message_open')} className='none_btn'>...</button>
                                    <div className='image__wrapper'><img src={item.text} alt="" /></div>         
                                </div>
                            </div>
                        )
                    }
                    else 
                        return (
                            <div key={item.id} onMouseEnter={e => show_btn_1(e)} onMouseLeave={e => close_btn_1(e)} className='message__me message__body'>
                                <div className='modal_wrapper_mes'>
                                    <div className='modal_message'>
                                        <ul>
                                            <li onClick={() => delete_message(item.id)}>Удалить</li>
                                        </ul>
                                    </div>
                                    <button onClick={(e) => e.target.previousElementSibling.classList.toggle('modal_message_open')} className='none_btn'>...</button>
                                    <p>{item.text}</p>            
                                </div>
                            </div>
                    )
                }
            })}         
        </div>
    )
}

export default Dialoge_messages
