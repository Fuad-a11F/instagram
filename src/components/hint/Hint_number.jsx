import React from 'react'
import Hint from './hint'

function Hint_number() {
    return (
        <Hint>
            <div className='hint__row'>
                <div>
                    <p className='hint__title'>Добавьте номер телефона</p>
                    <p className='hint__text'>Добавьте свой номер телефона, чтобы вы могли сбрасывать пароль, искать друзей и так далее.</p>
                </div>
                <button className='hint__button'>Добавить номер телефона</button>
            </div>
        </Hint>
    )
}

export default Hint_number
