import React from 'react'
import { useHistory } from 'react-router-dom'
import Hint from './hint'

function Hint_photo() {
    let history = useHistory()

    return (
        <Hint>
            <div className='hint__row'>
                <div>
                    <p className='hint__title'>Добавьте фото профиля</p>
                    <p className='hint__text'>Добавьте фото профиля, по которому вас смогут узнать друзья.</p>
                </div>
                <button onClick={() => history.push('/setting/main')} className='hint__button'>Добавить фото профиля</button>
            </div>
        </Hint>
    )
}

export default Hint_photo
