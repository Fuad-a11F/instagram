import React from 'react'
import './Auth_Login.css'
import { NavLink, useHistory } from 'react-router-dom'
import phones from './images/phones.png'
import Auth_form from './Auth_form';

function Auth() {
    let history = useHistory()
    
    if (localStorage.getItem('token') != null) {
        history.push('/')
    }

    return (
        <div className='container_login'>
            <div className='auth__login__body'>   
                <div className='login__column'>
                    <div className='login__img'>
                        <img src={phones} alt="" />
                    </div>
                </div>
                <div className='login__column'>
                    <div className='login-form__wrapper'>
                        <h2>Instagram</h2>
                        <div className='title-login'>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</div>
                        <button className='sign-up__btn btn-up'>Войти через Facebook (не работает)</button>
                        <p className='auth-or'>или</p>
                        <Auth_form />
                    </div>
                    <div className='login-form__reg'>
                            <div>У вас уже есть аккаунт?</div>
                            <NavLink to='/login' className='sign-in__btn '>Войти</NavLink>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Auth)
