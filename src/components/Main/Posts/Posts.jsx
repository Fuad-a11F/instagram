import React from 'react'
import Hint_Component from '../../hint/Hint_Component'
import './Posts.css'
import PostWrapper from './PostWrapper'
import { useQuery } from '@apollo/client'
import { GET_HINT } from '../../../GraphQl/Queries'

function Posts() {

    let {error, loading, data, refetch} = useQuery(GET_HINT, {variables: {token: localStorage.getItem('token')}})
    let [hint, setHint] = React.useState()

    React.useEffect(() => {
        if (data) setHint(data.getHint)
    }, [data])

    return (
        <div className='posts'>
            <h2 style={{marginTop: '80px', textAlign: 'center'}}>Не работает</h2>
            {hint && <Hint_Component refetch={refetch}/>}
            <PostWrapper />
        </div>
    )
}

export default Posts
