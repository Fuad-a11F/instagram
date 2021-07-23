import React from 'react'
import PostItemTop from './PostItemTop'
import PostItemPhoto from './PostItemPhoto'
import PostItemFooter from './PostItemFooter'

function PostItem() {
    return (
        <div className='postItem'>
           <PostItemTop/> 
           <PostItemPhoto /> 
           <PostItemFooter /> 
        </div>
    )
}

export default PostItem
