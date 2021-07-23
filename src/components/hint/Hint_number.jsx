import React from 'react'
import { useHistory } from 'react-router-dom'
import Hint from './hint'

function Hint_number() {
    let history = useHistory()

    return (
        <Hint>
            <div className='hint__row'>
                <div>
                    <p className='hint__title'>Добавьте номер телефона</p>
                    <p className='hint__text'>Добавьте свой номер телефона, чтобы вы могли сбрасывать пароль, искать друзей и так далее.</p>
                </div>
                <button onClick={() => history.push('/setting/main')} className='hint__button'>Добавить номер телефона</button>
            </div>
        </Hint>
    )
}

export default Hint_number
