import React from 'react'
import PersonPhoto from './PersonPhoto'

function PostItemTop() {
    return (
        <div className='postItemTop__row'>
            <div className="postItemTop__grid">
                <div className='postItemTop__photo'>
                    <PersonPhoto image={undefined} size={40}/>
                </div>
                <p className='postItemTop__username'>тест</p>
                <p className='postItemTop__name'>тест</p>
            </div>
            <div className="postItemTop__setting">
                setting
            </div>

        </div>
    )
}

export default PostItemTop
