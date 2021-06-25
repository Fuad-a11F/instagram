import React from 'react'
import Hint from './hint'

function Hint_friend() {
    return (
        <Hint>
            <div className='hint__row'>
                <div>
                    <p className='hint__title'>Найдите друзей</p>
                    <p className='hint__text'>Вы сами решаете, на кого подписаться. Мы никогда не будем размещать публикации без вашего разрешения.</p>
                </div>
                <button className='hint__button'>Найти друзей</button>
            </div>
        </Hint>
    )
}

export default Hint_friend
