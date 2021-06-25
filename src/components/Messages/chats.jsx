import React from 'react'
import One_person_chat from './one_person_chat'

function Chats() {
    return (
        <div  className='chats'>
            {[1,2,3,4,5].map(item => {
                return <One_person_chat id={item}/>
            })} 
        </div>
    )
}

export default Chats
