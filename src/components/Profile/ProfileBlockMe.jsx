import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_BLOCK } from '../../GraphQl/Queries'

const ProfileBlockMe = ({id, refetch}) => {
    let [deleteBlock] = useMutation(DELETE_BLOCK)

    async function delete_block() {
        await deleteBlock({variables: {token: localStorage.getItem('token'), id}})
        refetch()
    }

    return (
        <div className='profile_block'>
            <p>Вы добавили пользователя в черный список. Разблокируйте, чтобы видеть его посты</p> 
            <button className='modal_info_btn' style={{width: '115px', marginLeft:'10px'}} onClick={() => delete_block()}>Разблокировать</button>
        </div>
    )
}

export default ProfileBlockMe
