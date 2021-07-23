import React from 'react'
import One_person_chat from './one_person_chat'
import { useLocation } from 'react-router-dom'  
import { get_id } from '../Profile/Profile'

function Chats({data, refetch}) {
    let [chat, setChat] = React.useState()
    let location = useLocation()
    let id_location = get_id(location.pathname);

    React.useEffect(() => {
        if (data) setChat(data.getChat);
    },[data])

    React.useEffect(() => {
        refetch()
    },[])
    
    return (
        <>
            {chat && (
                <div  className='chats'>
                    {chat.map(item => {
                        return id_location === item.id ? <One_person_chat active={true} key={item.id} item={item} /> : <One_person_chat active={false} key={item.id} item={item} />
                    })} 
                </div>
            )}
        </>
    )
}

export default Chats
