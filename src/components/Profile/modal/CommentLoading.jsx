import React from 'react'
import CommentLoader from './CommentLoader'

const CommentLoading = () => {
    return (
        <div className='loader__comment'>
            <div>
                <CommentLoader />
            </div>
            <div>
                <CommentLoader />
            </div>
            <div>
                <CommentLoader />
            </div>
            <div>
                <CommentLoader />
            </div>
            <div>
                <CommentLoader />
            </div>
        </div>
    )
}

export default CommentLoading
