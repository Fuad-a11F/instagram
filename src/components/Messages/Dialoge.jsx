import React from 'react'
import { get_id } from '../Profile/Profile'
import Dialoge_messages from './dialoge_messages'
import Name_dialoge from './name_dialoge'
import Send_messages from './send_messages'
import { GET_MESSAGES, GET_USER_BLOCK } from '../../GraphQl/Queries'
import { useQuery } from '@apollo/client'

function Dialoge({id, refetch_chat}) {
    let user_block = useQuery(GET_USER_BLOCK, {variables: {token: localStorage.getItem('token'), id: get_id(id)}})
    let [block, setBlock] = React.useState("")
  
    React.useEffect(() => {
      if (user_block.data) setBlock(user_block.data.getUserBlock);
    }, [user_block.data])

    let {error, loading, data, refetch} = useQuery(GET_MESSAGES, {variables: {token: localStorage.getItem('token'), id: get_id(id)}})
    let [message, setMessage] = React.useState([])
    
    React.useEffect(() => {
        if(data) setMessage(data.getMessages);
    }, [data])

    return (
        <div className='dialoge__row'>
                <Name_dialoge user_block={user_block} refetch_chat={refetch_chat} id={get_id(id)}/>
                {message && <Dialoge_messages  refetch={refetch} id={get_id(id)} message={message}/>}
            {block && (
                <>
                    <Send_messages block={block} refetch={refetch} id={get_id(id)}/>
                </>
            )}
        </div>
    )
}

export default Dialoge
