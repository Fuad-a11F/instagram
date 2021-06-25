import React from 'react'
import Hint from './hint'

function Hint_photo() {
    return (
        <Hint>
            <div className='hint__row'>
                <div>
                    <p className='hint__title'>Добавьте фото профиля</p>
                    <p className='hint__text'>Добавьте фото профиля, по которому вас смогут узнать друзья.</p>
                </div>
                <button className='hint__button'>Добавить фото профиля</button>
            </div>
        </Hint>
    )
}

export default Hint_photo
