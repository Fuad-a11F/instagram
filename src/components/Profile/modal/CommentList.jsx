import React from 'react'
import heart_icon from '../../Header/images/heart_no.png'
import none_photo from '../../../none.jpg'

const CommentList = ({commentList, setScroll}) => {
    return (
        <>
            {commentList && (
                    commentList.map((item, index) => {
                        return (
                            <div key={item.id} className={index === 0 ? 'first-comment' : ''}>
                                <div className={item.user_id.id === item.send_user_id ? 'main__comment comment__row'  :  'comment__row'}>
                                    <img src={item.user_id.image_url ? item.user_id.image_url : none_photo} width='35' height='35' alt="" />
                                    <p ><span>{item.user_id.name}</span> {item.text}</p> 
                                </div>
                                <div className="comment__info">
                                    <span> {item.time}</span>
                                    <img src={heart_icon} width='15' height='15' alt="" />
                                </div>
                            </div>
                        )
                    })
                )}
        </>
    )
}

export default CommentList
