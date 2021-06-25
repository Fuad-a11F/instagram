import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { ADD_COMMENT, GET_POST } from '../../../GraphQl/Queries'
import './detailsInfoPost.css'
import none_photo from '../../../none.jpg'
import heart_icon from '../../Header/images/heart_no.png'
import comment_icon from '../../Header/images/dialoge_no.png'
import zakladka_icon from '../../Main/images/zakladka.png'


function DetailInfoPost({postId, modal, setModal}) {
    let {error, loading, data, refetch} = useQuery(GET_POST, {variables: {token: localStorage.getItem('token'), id: postId}})
    let [info, setInfo] = React.useState()
    let [addComment] = useMutation(ADD_COMMENT)
    let [comment, setComment] = React.useState('')

    React.useEffect(() => {
        if (data) setInfo(data.getPost);
        console.log(data);
    }, [data])

    React.useEffect(() => {
        refetch()
    }, [])

    function add_comment(e) {
        e.preventDefault();
        addComment({variables: {token: localStorage.getItem('token'), time: Date.now().toString(), text: comment, post_id: postId }})
        setComment('')
    }
   
    return (
        <div>
            {info && (
                <div className={modal ? 'modal_info' : 'modal_info none'}>
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
                                            <p className='grid-position'>sdf</p>
                                        </div>
                                    </div>
                                    <div>
                                        kjh
                                    </div>
                                </div>
                                <hr />
                                <div className="post_info-comment">
                                    {info.comments.map(item => {
                                        return <p>{item.text}</p>
                                    })}
                                </div>
                                <hr />
                                <div>   
                                    <div className='post_info-action'>
                                        <div>
                                            <img src={heart_icon} width='28' height='28' alt="" />
                                            <img src={comment_icon} width='28' height='28' alt="" />
                                        </div>
                                        <div>
                                            <img src={zakladka_icon} width='28' height='28' alt="" />
                                        </div>
                                    </div>
                                    <form action="#" onSubmit={(e) => add_comment(e)}>
                                        <input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder='Добавить комментарий...'/>
                                        <button>Опубликовать</button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        <button className='close-btn' onClick={() => setModal(false)} >h</button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default DetailInfoPost
