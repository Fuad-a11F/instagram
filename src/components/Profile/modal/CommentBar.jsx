import React from 'react'
import { GET_POST_COMMENT } from '../../../GraphQl/Queries'
import { ADD_COMMENT, ADD_FAVOURITE, ADD_LIKE_POST } from '../../../GraphQl/Queries'
import CommentList from './CommentList'
import CommentLoading from './CommentLoading'
import heart_icon from '../../Header/images/heart_no.png'
import heart_like from '../../Header/images/heart_like.png'
import comment_icon from '../../Header/images/dialoge_no.png'
import zakladka_icon from '../../Main/images/zakladka.png'
import zakladka_active from '../../Main/images/zakladka_active.jpg'
import { useMutation, useQuery } from '@apollo/client'
import { context } from '../ProfilePublishedWrapper'

const CommentBar = ({post_id, info, postId, id}) => {
    let btnRef2 = React.useRef()
    let [page1, setPage1] = React.useState(0)
    let [commentList, setCommentList] = React.useState([])
    let {error, loading, data, refetch} = useQuery(GET_POST_COMMENT, {variables: {post_id, limit: 10, offset: page1 * 10 }})
    let [addComment] = useMutation(ADD_COMMENT)
    let [comment, setComment] = React.useState('')
    let [addLikePost] = useMutation(ADD_LIKE_POST)
    let [addFavourite] = useMutation(ADD_FAVOURITE)
    let value = React.useContext(context)

    async function add_comment(e) {
        e.preventDefault();
        await addComment({variables: {token: localStorage.getItem('token'), user_id: id, text: comment, post_id: postId }})
        setComment('')
        await refetch()
        await value()
    }

    async function addLike() {
        await addLikePost({variables: {token: localStorage.getItem('token'), user_id: id, post_id: postId}})
        value()
    }

    async function add_favourite() {
        await addFavourite({variables: {token: localStorage.getItem('token'), post_id: info.id}})
        refetch()
    }
    React.useEffect(() => {
        if (data) {
            if (data.getPostComment.length === 0) {
                btnRef2.current.style.display = 'none'
                return 
            }
            setCommentList(data.getPostComment)
        };
    }, [data])

    return (
        <>     
            <div className="post_info-comment">
                <button ref={btnRef2} className='more__show little-margin' onClick={() => setPage1(page1+1)}>Показать еще</button>
                {loading ? <CommentLoading /> : <CommentList  commentList={commentList} />}
            </div>
            <hr />
            <div>   
                <div className='post_info-action'>
                    <div>
                        <img onClick={() => addLike()} src={info.liked ? heart_like : heart_icon} width='28' height='28' alt="" />
                        <img src={comment_icon} width='28' height='28' alt="" />
                    </div>
                    <div>
                        <img onClick={() => add_favourite()} src={info.favourite ? zakladka_active : zakladka_icon} width='28' height='28' alt="" />
                    </div>
                </div>
                <form action="#" onSubmit={(e) => add_comment(e)}>
                    <input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder='Добавить комментарий...'/>
                    <button>Опубликовать</button>
                </form>
            </div>  
        </>
        
    )
}

export default CommentBar
