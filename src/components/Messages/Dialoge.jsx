import React from 'react'
import Dialoge_messages from './dialoge_messages'
import Name_dialoge from './name_dialoge'
import Send_messages from './send_messages'

function Dialoge({id}) {
    return (
        <div className='dialoge__row'>
            <Name_dialoge />
            <Dialoge_messages />
            <Send_messages />
        </div>
    )
}

export default Dialoge
