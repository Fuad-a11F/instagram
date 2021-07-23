import { useMutation } from '@apollo/client'
import React from 'react'
import { ADD_POST } from '../../GraphQl/Queries'
import upload_image from '../../upload'
import AddPost from './modal/addPost'
import 'firebase/storage'
import firebase from 'firebase/app'

function ProfileAdd({setNav}) {
    let storage12 = firebase.storage()
    let [modal, setModal] = React.useState(false)
    let [publish, setPublish] = React.useState(false)
    let ref_preview = React.useRef()
    let [title, setTitle] = React.useState('')
    let [addPost] = useMutation(ADD_POST)
    let [image, setImage] = React.useState()

    async function upload_img(e) {

        function callback(ev) {
            setImage(e.target.files[0])
            ref_preview.current.innerHTML = `<img src=${ev.target.result} alt='фото'/>`
            ref_preview.current.style.display = 'block'
        }
        upload_image(e, callback)
    }

    function publishPost(e) {
        e.preventDefault();
        let ref = storage12.ref(`images/${image.name}`)
        let task = ref.put(image)
        task.on('state_changed', snapshot => {
            console.log(snapshot);
        }, error => {
            console.log(error);
        }, () => {
            task.snapshot.ref.getDownloadURL().then(async url => {
                await addPost({variables: {token: localStorage.getItem('token'), image_path: url, comment_title: title}});
                sessionStorage.setItem('item', 'Публикации')
                setModal(true)
                setPublish(true)
                setNav((prev) => {
                    return prev.map(item => {
                        if (item.title === 'Публикации') return {...item, checked:  true}
                        else return {...item, checked:  false}
                    })
                })
            })
        })
    }

    return (
        <div>
            <AddPost published={publish} setModal={setModal} modal={modal}/>
            <form action="#" onSubmit={(e) => publishPost(e)}>
                <div className='ProfileAdd'>
                    <h2>Добавить публикацию</h2>
                    <div className="ProfileAdd_img">
                        <div className="ProfileAdd_img-wrapper">
                            <input type="file" onChange={(e) => upload_img(e)} accept=".jpg, .png" id='file-input' className='input-file' />
                            <div className="input__file-button button">
                                <span className="input__file-button-text">Выберите файл</span>
                            </div>
                        </div>
                        <span className='label-input'>*Выберите изображение, которое хотите опубликовать</span></div>           
                    <div ref={ref_preview} className="img_preview"></div>
                    <div className="ProfileAdd__desc">
                        <span>Добавить подпись:</span>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Добавить подпись'/>
                    </div>
                    <button className='publish-btn button'>Опубликовать</button>
                </div>
            </form>
        </div>
       

    )
}

export default ProfileAdd
