import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { ADD_CHAT, GET_CHAT, GET_USERS } from '../../../GraphQl/Queries'
import ModalMes from './Modal_mes'
import none_icon from '../../../none.jpg'
import { NavLink } from "react-router-dom"

function Modal_send({setModal_message, refetch_chat}) {
    let {error, loading, data} = useQuery(GET_CHAT, {variables: {token: localStorage.getItem('token')}})
    let [addChat] = useMutation(ADD_CHAT)
    let [recommend,setRecommend] = React.useState()
    let input_ref = React.useRef()
    let [peopleSearch, setPeaopleSearch] = React.useState()
    let [getUserSearch, res] = useLazyQuery(GET_USERS)

    React.useEffect(() => {
        if (data) setRecommend(data.getChat);
    }, [data])

    React.useEffect(() => {
        if (res.data) {
            if (res.data.getUsers.length === 0) 
                setPeaopleSearch('Не найдено!')
            else
                setPeaopleSearch(res.data.getUsers);
        }
    }, [res.data])

    let delay_search
    function search_user(e) {
        clearTimeout(delay_search)
        delay_search = setTimeout(()  => {
            getUserSearch({ variables: {name: input_ref.current.value} })
        }, 600)   
    }

    async function add_to_the_chat(id) {
        await addChat({variables: {token: localStorage.getItem('token'), id}})
        refetch_chat()
        setModal_message(false)
    }

    return (
        <ModalMes>
            <div className='modal_mes__content'>
                <div className='modal_mes__messages'>
                    <p className='close' onClick={() => setModal_message(false)}>X</p>
                    <p className='new_message'>Новое сообщение</p>
                    <button className='next'>Далее</button>
                </div>
                <hr />
                <div className="modal_mes__messages">
                    <p className='address'>Кому:</p><input ref={input_ref} onChange={(e) => search_user(e)} className='input_long' autoFocus={true} type="text" placeholder='Поиск...' />
                </div>
                <hr />
                <div className="modal_mes__recommended">
                    {!peopleSearch ? (
                        <>
                        <p className='recomended' >Рекомендуемые</p>
                        {recommend && 
                            recommend.map(item => {
                                return (<NavLink style={{textDecoration:'none'}} key={item.id} onClick={() => setModal_message(false)} to={'/dialoge/'+item.id}>
                                            <div key={item.id} className='chat'>
                                                <img className='chat_img' src={item.image_url ? item.image_url : none_icon} alt="" width='50' height='50' />
                                                <div className="chat_name">{item.name}</div>
                                            </div>
                                        </NavLink>)          
                            })}
                        </>
                                            
                    ) : 
                        Array.isArray(peopleSearch) ? (
                            <>
                                <p className='recomended' >Результаты поиска</p>
                                {peopleSearch.map(item => {
                                    return (<NavLink style={{textDecoration:'none'}} onClick={() => add_to_the_chat(item.id)} to={'/dialoge/'+item.id}>
                                                <div key={item.id} className='chat'>
                                                    <img className='chat_img' src={item.image_url ? item.image_url : none_icon} alt="" width='50' height='50' />
                                                    <div className="chat_name">{item.name}</div>
                                                </div>
                                            </NavLink>) 
                                })}
                            </>
                        ) : (
                            <p>По вашему запросу ничего не найдено :(</p>
                        )
                    }

                    
                </div>
            </div>      
        </ModalMes>
    )
}

export default Modal_send
