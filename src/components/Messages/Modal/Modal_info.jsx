import { useMutation } from '@apollo/client'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ADD_BLOCK, DELETE_BLOCK, DELETE_CHAT } from '../../../GraphQl/Queries'
import Modal_mes from './Modal_mes'


const Modal_info = ({setModal, id, refetch_chat, user_block}) => {
    let [deleteChat] = useMutation(DELETE_CHAT)
    let [addBlock] = useMutation(ADD_BLOCK)
    let [deleteBlock] = useMutation(DELETE_BLOCK)
    let history = useHistory()

    async function delete_chat() {
        await deleteChat({variables: {id}})
        setModal(false)
        refetch_chat()
        history.push('/dialoge/')
    }

    async function add_block() {
        await addBlock({variables: {token: localStorage.getItem('token'), id}})
        setModal(false)
        user_block.refetch()
    }

    async function delete_block() {
        await deleteBlock({variables: {token: localStorage.getItem('token'), id}})
        setModal(false)
        user_block.refetch()
    }
    
    return (
        <Modal_mes>
            <button className='modal_info_btn' onClick={() => delete_chat()}>Удалить переписку</button>
            {user_block.data.getUserBlock === 'Вы добавили пользователя в черный список' &&
                <button className='modal_info_btn' onClick={() => delete_block()}>Разблокировать</button>
            }
            {user_block.data.getUserBlock != 'Вы добавили пользователя в черный список' &&
                <button className='modal_info_btn' onClick={() => add_block()}>Заблокировать</button>
            }
            <button className='modal_info_btn' onClick={() => setModal(false)}>Отменить</button>
        </Modal_mes>
    )
}

export default Modal_info
