import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Auth_Login.css'
import { useQuery } from '@apollo/client';
import { LOGIN_USER } from '../../GraphQl/Queries';
import { CircularProgress } from '@material-ui/core'
import phones from './images/phones.png'
import Login_form from './Login_form';


function Login() {
    let history = useHistory()
    let [email, setEmail] = React.useState(undefined)
    let [ password, setPassword ] = React.useState(undefined)

    if (localStorage.getItem('token') != null) {
        history.push('/')
    }

    const { loading, data } = useQuery(LOGIN_USER,  {variables: {email: email, password: password}})

    React.useEffect(() => {
        if (data) {
            if (data.loginUser && data.loginUser != 'error') {
                localStorage.setItem('token', data.loginUser);
                history.push('/')
            }     
        }
    }, [data])

    return (
        <div className='container_login'>
        {loading &&  <div className='loading_div'> <CircularProgress color="inherit"/> Загрузка... </div>}
        <div className='auth__login__body'>   
            <div className='login__column'>
                <div className='login__img'>
                    <img src={phones} alt="" />
                </div>
            </div>   
            <div className='login__column'>
                <div className='login-form__wrapper'>
                    <h2>Instagram</h2>
                    <Login_form setEmail={setEmail} setPassword={setPassword} />
                    <p>или</p>
                    <div>
                        <a className='enter__facebook' href="#">Войдите через Facebook (не работает)</a>
                    </div>
                    <div>
                        <a className='forget__password' href="#">Забыли пароль? (не работает)</a>
                    </div>
                </div>
                <div className='login-form__reg'>
                    <div>У вас еще нет аккаунта?</div>
                    <div><NavLink to='/authenticate' className='sign-up__btn'>Зарегистрироваться</NavLink></div>
                </div>
            </div> 

        </div>

        </div>
        
    )
}

export default React.memo(Login)
