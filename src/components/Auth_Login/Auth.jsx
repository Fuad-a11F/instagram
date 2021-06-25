import React from 'react'
import './Auth_Login.css'
import { NavLink, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { REGISTER_USER } from '../../GraphQl/Queries';
import { useMutation } from '@apollo/client';


function Auth() {
    let [value, setValue] = React.useState(false)
    let history = useHistory()
    if (localStorage.getItem('token') != null) {
        history.push('/')
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [RegisterUser, {data1}]  = useMutation(REGISTER_USER)
    function registration(data) {
        RegisterUser({variables: {name: data.name, nickname: data.login, email: data.email, password: data.password}})
     }


    return (
        <div className='auth__login__body'>
            <form action="" onSubmit={handleSubmit(registration)}>
                <input className='input_l_a' type="text" {...register("name")} placeholder='Полное имя'/>
                <input className='input_l_a' type="text" {...register("login")} placeholder='Логин'/>
                <input className='input_l_a' type="text" {...register("email")} placeholder='Почтовый ящик'/>
                <div className='password'>
                    <input className='input_l_a' {...register("password")} type={value ? 'password' : 'text'} placeholder='Пароль'/>
                    <input type="checkbox" checked={value} onChange={() => setValue(!value)}/>
                </div>
                <button className='sign-up__btn'>Зарегистрироваться</button>
            </form>
            <p>или</p>
            <NavLink to='/login' className='sign-in__btn'>Войти</NavLink>
        </div>
    )
}

export default Auth
