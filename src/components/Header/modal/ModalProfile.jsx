import React from 'react'
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import parseJwt from '../../../parseJWT'
import Modal from './Modal'

function ModalProfile() {
    let history = useHistory()
    function logout() {
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <Modal classes='model_profile'>
            <div className="modal__profile">
                <div className='modal__button'>
                    <NavLink className='modal__link' to={'/profile/'+parseJwt(localStorage.getItem('token')).id}>Профиль</NavLink>
                </div>
                <div className='modal__button'>
                    <NavLink className='modal__link' to='/profile/saved'>Сохраненное</NavLink>
                </div>
                <div className='modal__button'>
                <NavLink className='modal__link' to='/setting/main'>Настройки</NavLink>
                </div>
                <hr />
                <div className='modal__button'>
                    <button onClick={() => logout()} className='modal__link link-btn'>Выйти</button>
                </div>
                         
            </div>
        </Modal>
    )
}

export default ModalProfile
