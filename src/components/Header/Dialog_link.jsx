import React from 'react'
import dialoge_no from "./images/dialoge_no.png";
import dialoge_yes from "./images/dialoge_yes.png";
import { NavLink } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_MESSAGE_HAVE } from '../../GraphQl/Queries';
import { refetch_func } from './refetch';

const Dialog_link = ({action, pathname}) => {
    let get_message_have = useQuery(GET_MESSAGE_HAVE, {variables: {token: localStorage.getItem('token')}})
    let [newMessage, setNewMessage] = React.useState()
    refetch_func(get_message_have.refetch)
    React.useEffect(() => {
        if (get_message_have.data) setNewMessage(get_message_have.data.getMessageHave);
    }, [get_message_have.data])

    return (
        <NavLink className="item" to="/dialoge">
            <img
            src={
                pathname.includes("dialoge") && !action ? dialoge_yes : dialoge_no
            }
            alt=""
            width="25"
            height="25"
            />
            {newMessage && <div className='new__message'></div>}
        </NavLink>

    )
}

export default Dialog_link
