import { useMutation } from '@apollo/client'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { ADD_BLOCK, ADD_CHAT, DELETE_BLOCK } from '../../../GraphQl/Queries'
import './setting.css'

function Setting({setSettingModal, myPage, id,data, refetch}) {
    let  [addChat] = useMutation(ADD_CHAT)
    let [addBlock] = useMutation(ADD_BLOCK)
    
    let history = useHistory()

    async function add_chat() {
        await addChat({variables: {token: localStorage.getItem('token'), id: id}})
        history.push('/dialoge')
    }

    async function add_block() {
        await addBlock({variables: {token: localStorage.getItem('token'), id}})
        setSettingModal(false)
        refetch()
    }

    function logout() {
        localStorage.removeItem('token')
        history.push('/login')
    }
    
    return (
        <div className='modal-set'>
            <div className="modal-set__content">
                {myPage && (
                    <>
                        <NavLink className='setting_send_message' to="/setting/change"><button>Сменить пароль</button></NavLink>
                        <button onClick={() => logout()}>Выйти</button>
                    </>
                )}
                {!myPage && (
                    <>
                        <button className='setting_send_message' onClick={()=> add_chat()}>Написать сообщение</button>
                        <button>Пожаловаться</button>
                        <button className='modal_info_btn' onClick={() => add_block()}>Заблокировать</button>
                    </>
                )}
                <button className='setting_cancel' onClick={() => setSettingModal(false)}>Отмена</button>
            </div>
        </div>
    )
}

export default Setting
