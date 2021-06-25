import React from 'react'
import heart from '../../Header/images/heart_no.png'
import comment from '../../Header/images/dialoge_no.png'
import zakladka from '../images/zakladka.png'
import {NavLink} from 'react-router-dom'

function PostItemFooter() {
    let [value, setValue] = React.useState('')

    return (
        <div className='postItemFooter'>
            <div className='postItemFooter__row'>
                <div className='postItemFooter__column'>
                    <img src={heart} width='28' height='28' alt="" />
                    <img src={comment} width='28' height='28' alt="" />
                </div>
                <div>
                    <img src={zakladka} width='28' height='28' alt="" />
                </div>
            </div>
            <div className='postItemFooter__bottom'>
                <p><span  className='looked'>Просмотры: 422 </span></p>
                <span className='postItemFooter__name'>refd</span> - <span className='postItemFooter__comment'> jhgh</span>
                <NavLink className='all__comments' to='/comment'>Показать все комментарии <span>(8)</span> </NavLink>
            </div>
            <div className='postItemFooter__form'>
                <input className='postItemFooter__input' value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Добавить комментарий' />
                <button disabled={!value} onClick={() => alert('sdf')}>Опубликовать</button>
            </div>

        </div>
    )
}

export default PostItemFooter
