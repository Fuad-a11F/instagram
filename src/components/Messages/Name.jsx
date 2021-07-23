import React from 'react'
import Modal_send from './Modal/Modal_send'
import zametka_icon from './images/zametka.png'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_USER_NAME } from '../../GraphQl/Queries'

function Name({modal_message, setModal_message, refetch_chat}) {
    let location = useLocation()
    let {loading, data} = useQuery(GET_USER_NAME, {variables: {id: parseInt(location.pathname.slice(location.pathname.lastIndexOf('/') + 1))}})
    let [name, setName] = React.useState('')
    React.useEffect(() => {
        if (data) setName(data.getUserName)
    }, [data])
    

    return (
        <div  className='name__body'>
            {loading && <div className='name'>Загрузка...</div>}
            {!loading && <div className='name'>{name}</div>}
            <div className="name__send" onClick={() => setModal_message(true)}><img src={zametka_icon} width='28' height='28' alt="" /></div>
            {modal_message  && <Modal_send refetch_chat={refetch_chat} setModal_message={setModal_message}/>}
        </div>
    )
}

export default Name
