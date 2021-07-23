import React from 'react'
import { useMutation } from '@apollo/client'

import { socket } from '../../App'
import { ADD_MESSAGE } from '../../GraphQl/Queries'

import send_icon from './images/send.png'
import picture_icon from './images/picture_icon.jpg'
import 'firebase/storage'
import firebase from 'firebase/app'

function Send_messages({id, refetch, block}) {
    let storage12 = firebase.storage()
    let [value, setValue] = React.useState('')
    let [addMessage] = useMutation(ADD_MESSAGE)
    React.useEffect(() => {socket && socket.on('messageSend', refetch)}, [socket])
    let loading_img = React.useRef()

    async function send_text_mes() {         
        if (value) {
            await addMessage({variables: {token: localStorage.getItem('token'), text: value, send_user_id: id, is_image: false}})
            socket.emit('message', {room: id, token: localStorage.getItem('token')})
            setValue('')
        }
    }

    async function send_image_mes(e) {         
        if (e.target.value) {
            let ref = storage12.ref(`message/${ e.target.files[0].name}`)
            let task = ref.put(e.target.files[0])
            task.on('state_changed', snapshot => {
                loading_img.current.style.display = 'block'
                console.log(snapshot);
            }, error => {
                console.log(error);
            }, () => {
                task.snapshot.ref.getDownloadURL().then(async url => {
                    await addMessage({variables: {token: localStorage.getItem('token'), text: url, send_user_id: id, is_image: true}})
                    socket.emit('message', {room: id, token: localStorage.getItem('token')})
                    loading_img.current.style.display = 'none'
                })
            })

        }
    }

    return (
        <div className='send__messages'>
            {block === 'Вы добавили пользователя в черный список' && <p style={{marginLeft:'10px'}}>Вы добавили пользователя в черный список. Разблокируйте, чтобы писать сообщения</p>}
            {block === 'Вы у пользователя в черном списке' && <p style={{marginLeft:'10px'}}>Пользователь добавил вас в черный список</p>}
            {block === 'Ок' && (
                <>
                    <label htmlFor="picture"><img src={picture_icon} width='30' height='22' alt="" /></label>
                    <input type="file" onChange={(e) => send_image_mes(e)} id='picture' />
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Новое сообщение...'/>
                    <button onClick={send_text_mes}><img src={send_icon} width='30' height='30' alt="" /></button>
                </>
            )}
            <div ref={loading_img} className='img_loading'>Идет загрука картинки...</div>
        </div>
    )
}

export default Send_messages
    