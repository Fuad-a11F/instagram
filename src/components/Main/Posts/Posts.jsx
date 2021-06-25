import React from 'react'
import Hint_Component from '../../hint/Hint_Component'
import './Posts.css'
import Status from './Status'
import PostWrapper from './PostWrapper'

function Posts() {
    return (
        <div className='posts'>
            <Status />   
            <Hint_Component slider={true}/>
            <PostWrapper />
        </div>
    )
}

export default Posts
