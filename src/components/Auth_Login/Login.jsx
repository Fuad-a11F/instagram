import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Auth_Login.css'
import { useForm } from "react-hook-form";
import { useQuery } from '@apollo/client';
import { LOGIN_USER } from '../../GraphQl/Queries';
import { CircularProgress } from '@material-ui/core'

function Login() {
    let history = useHistory()
    if (localStorage.getItem('token') != null) {
        history.push('/')
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [email, setEmail] = React.useState(undefined)
    let [password, setPassword] = React.useState(undefined)
    const {error, loading, data} = useQuery(LOGIN_USER,  {variables: {email: email, password: password}})

    function Login(data1) {  
        setEmail(data1.email)
        setPassword(data1.password)
    }

    React.useEffect(() => {
        if (data) {
            if (data.loginUser && data.loginUser != 'error') {
                localStorage.setItem('token', data.loginUser);
                history.push('/')
            }     
        }
    }, [data])

    return (
        <>
        {loading &&  <div className='loading_div'> <CircularProgress color="inherit"/> Загрузка... </div>}
        <div className='auth__login__body'>
            
            <form action="" onSubmit={handleSubmit(Login)}>
                <input className='input_l_a' type="text" {...register("email")} placeholder='Почтовый ящик'/>
                <input className='input_l_a' type="text" {...register("password")} placeholder='Пароль'/>
                <div className='sign_in__row'>
                    <div>
                        <input type="checkbox" id='save_me'/>
                        <label htmlFor="save_me">Запомнить меня</label>
                    </div>
                    <button className='sign-in__btn'>Войти</button>
                </div>
            </form>
            <p>или</p>
            <NavLink to='/authenticate' className='sign-up__btn'>Зарегистрироваться</NavLink>
        </div>
        </>
        
    )
}

export default Login
