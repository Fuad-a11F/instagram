import React from 'react'
import PostLoader from "./ProfileContentLoader";

const PostLoaderWrapper = () => {
    return (
        <>
            <div className='post__loader'>
            <PostLoader /> 
            </div>
            <div className='post__loader'>
            <PostLoader /> 
            </div>
            <div className='post__loader'>
            <PostLoader /> 
            </div>
            <div className='post__loader'>
            <PostLoader /> 
            </div>
            <div className='post__loader'>
            <PostLoader /> 
            </div>
            <div className='post__loader'>
            <PostLoader /> 
            </div>
        </>
    )
}

export default PostLoaderWrapper
