import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email('Почтовый ящик должен быть валидным!').max(50, 'Не может быть больше 50 символов!').required('Обязательное поле!'),
    password: yup.string().min(8, 'Пароль должен содержать минимум 8 символов!').required('Обязательное поле!'),
});

const Login_form = ({ setPassword, setEmail}) => {
    let [value, setValue] = React.useState(true)
    let [text,setText] = React.useState('')

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function Login(data1) {  
        setEmail(data1.email)
        setPassword(data1.password)
    }


    return (
        <form action="" onSubmit={handleSubmit(Login)}>
            <input className='input_l_a' type="text" {...register("email")} placeholder='Почтовый ящик'/>
            <p className='auth-errors'>{errors.email?.message}</p>
            <div className='password'>
                <input className='input_l_a'  {...register("password")} type={value ? 'password' : 'text'} value={text} onChange={(e) => setText(e.target.value)} placeholder='Пароль'/>
                {text && <p onClick={() => setValue(!value)}>{value ? 'Показать' : "Скрыть"}</p> }
            </div>
            <p className='auth-errors'>{errors.password?.message}</p>
            <div className='sign_in__row'>
                <button className='sign-in__btn btn-sign'>Войти</button>
            </div>
        </form>
    )
}

export default Login_form
