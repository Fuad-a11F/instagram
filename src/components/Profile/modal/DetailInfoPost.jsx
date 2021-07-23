import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { DELETE_POST, GET_POST } from '../../../GraphQl/Queries'
import './detailsInfoPost.css'
import CommentBar from './CommentBar'
import none_photo from '../../../none.jpg'
import setting_icon from './images/setting.png'
import { CircularProgress } from '@material-ui/core'

function DetailInfoPost({postId, modal, setModal, id, refetch}) {
    let {error, loading, data} = useQuery(GET_POST, {variables: {token: localStorage.getItem('token'), id: postId, user_id: id}})
    let [deletePost] = useMutation(DELETE_POST)
    let [info, setInfo] = React.useState([])
    let [modalDel, setModalDel] = React.useState(false)

    React.useEffect(() => {
        if (data) {
            setInfo(data.getPost)
        }
      }, [data])

    React.useEffect(() => {
        refetch()
    }, [])

    async function delete_post(id) {
        await deletePost({variables: {id}})
        refetch()
    }
   
    return (
        <div className={modal ? 'detail__info' : 'detail__info none'}>
            {!loading ? (     
                info.length != 0 && (
                <div>
                    <div className="modal_info-content">
                        <div className='post__grid'>
                            <div className="post-main__data">
                                <img src={info.photo_url} alt="" />
                            </div>
                            <div className="post__info">
                                <div className='post_info-top'>
                                    <div className='post__info-grid'>
                                        <img src={info.user_main.image_url ? info.user_main.image_url : none_photo} width='45' height='45' alt="" />
                                        <div>
                                            <p>{info.user_main.name}</p>
                                            <p className='grid-position'>{info.user_main.nickname}</p>
                                        </div>
                                    </div>
                                    <div className='post__info-setting'>
                                        <img onClick={() => setModalDel(!modalDel)} src={setting_icon} width='20' height='20' alt="" />
                                        {modalDel && <div className='setting__wrapper'>
                                            <button onClick={() => delete_post(info.id)}>Удалить</button>
                                        </div>}
                                    </div>
                                </div>
                                <hr />
                                <CommentBar postId={postId} id={id} post_id={info.id} info={info} />
                            </div>
                        </div>
                        <button className='close-btn' onClick={() => setModal(false)} >X</button>
                    </div>
                </div>
                )
            ) :  <div className='modal_info'>
                    <div className='modal_info-content modal-loading'><CircularProgress color="primary"/></div>
                </div>}
            
        </div>

    )
}

export default React.memo(DetailInfoPost)
