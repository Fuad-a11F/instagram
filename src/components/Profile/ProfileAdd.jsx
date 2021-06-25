import { useMutation } from '@apollo/client'
import React from 'react'
import { ADD_POST } from '../../GraphQl/Queries'
import upload_image from '../../upload'
import AddPost from './modal/addPost'

function ProfileAdd({setNav}) {
    let [modal, setModal] = React.useState(false)
    let [publish, setPublish] = React.useState(false)
    let ref_preview = React.useRef()
    let [imgPath, setImgPath] = React.useState()
    let [title, setTitle] = React.useState('')
    let [addPost] = useMutation(ADD_POST)

    function upload_img(e) {
        let path_result = upload_image(e, setImgPath)
        ref_preview.current.innerHTML = `<img src=${path_result} alt='фото'/>`
        ref_preview.current.style.display = 'block'
    }

    function publishPost(e) {
        e.preventDefault();
        setModal(true)
        addPost({variables: {token: localStorage.getItem('token'), image_path: imgPath, comment_title: title}});
        sessionStorage.setItem('item', 'Публикации')
        setNav((prev) => {
            return prev.map(item => {
                if (item.title === 'Публикации') return {...item, checked:  true}
                else return {...item, checked:  false}
            })
        })
        setPublish(true)
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
                    <button  className='publish-btn button'>Опубликовать</button>
                </div>
            </form>
        </div>
       

    )
}

export default ProfileAdd
