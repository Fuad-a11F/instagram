import React from 'react'
import StatusPersonPhoto from './StatusPersonPhoto'

function PostItemTop() {
    return (
        <div className='postItemTop__row'>
            <div className="postItemTop__grid">
                <div className='postItemTop__photo'>
                    <StatusPersonPhoto size={40}/>
                </div>
                <p className='postItemTop__username'>jhvghjk</p>
                <p className='postItemTop__name'>87675</p>
            </div>
            <div className="postItemTop__setting">
                setting
            </div>

        </div>
    )
}

export default PostItemTop
