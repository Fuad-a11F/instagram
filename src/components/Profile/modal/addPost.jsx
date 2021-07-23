import React from 'react'
import Modal from "../../modal/Modal";
import './addPost.css'
import {NavLink} from 'react-router-dom'
import parseJwt from '../../../parseJWT';

function addPost({published, modal, setModal}) {
    return (
        <Modal modal={modal}>
            <div className='result__loading'>
                {published ? <p>Публикация добавлена!</p> : <p>загрузка...</p>}
            </div>
            <div className="nav_modal">
                <NavLink onClick={() => setModal(false)} to={'/profile/' + parseJwt(localStorage.getItem('token')).id}>Перейти в профиль</NavLink>
                <button onClick={() => setModal(false)}>Остаться на этой странице</button>
            </div>
        </Modal>
    )
}

export default addPost
