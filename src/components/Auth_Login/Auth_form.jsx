
import { useMutation } from '@apollo/client';
import React from 'react'
import { REGISTER_USER } from '../../GraphQl/Queries';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup.string().matches(/^[aA-zZ\s]+$/, 'Поле должно содержать только буквы!').required('Обязательное поле!'),
    login: yup.string().max(30, 'Не может быть больше 30 символов!').required('Обязательное поле!'),
    email: yup.string().email('Почтовый ящик должен быть валидным!').max(50, 'Не может быть больше 50 символов!').required('Обязательное поле!'),
    password: yup.string().min(8, 'Пароль должен содержать минимум 8 символов!').required('Обязательное поле!'),
  });

const Auth_form = () => {
    let [value, setValue] = React.useState(true)
    let [text,setText] = React.useState('')
    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [RegisterUser]  = useMutation(REGISTER_USER)

    async function registration(data) {
        await RegisterUser({variables: {name: data.name, nickname: data.login, email: data.email, password: data.password}})
        history.push('/login')
    }

    return (
        <form action="" onSubmit={handleSubmit(registration)}>
            <input className='input_l_a' type="text" {...register("name")} placeholder='Полное имя'/>
            <p className='auth-errors'>{errors.name?.message}</p>
            <input className='input_l_a' type="text" {...register("login")} placeholder='Логин'/>
            <p className='auth-errors'>{errors.login?.message}</p>
            <input className='input_l_a' type="text" {...register("email")} placeholder='Почтовый ящик'/>
            <p className='auth-errors'>{errors.email?.message}</p>
            <div className='password'>
                <input className='input_l_a'  {...register("password")} type={value ? 'password' : 'text'} value={text} onChange={(e) => setText(e.target.value)} placeholder='Пароль'/>
                {text && <p onClick={() => setValue(!value)}>{value ? 'Показать' : "Скрыть"}</p> }
            </div>
            <p className='auth-errors'>{errors.password?.message}</p>
            <button className='sign-up__btn btn-up'>Зарегистрироваться</button>
        </form>
    )
}

export default Auth_form
