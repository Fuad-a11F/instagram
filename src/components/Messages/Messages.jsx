import React from "react";
import login from "../hoc/login";
import new_component from "../hoc/new_component";
import Dialoge from "./Dialoge.jsx";
import Chats from "./chats";
import Main_messages from "./Main_messages";
import "./Messages.css";
import Name from "./Name";
import { useQuery } from "@apollo/client";
import { GET_CHAT } from "../../GraphQl/Queries";


function Messages({ id }) {
  let [modal_message, setModal_message] = React.useState(false);
  let chatQuery = useQuery(GET_CHAT, {variables: {token: localStorage.getItem('token')}})

  return (
    <div className="container">
      <div className="dialoge">
        <Name
          refetch_chat={chatQuery.refetch}
          modal_message={modal_message}
          setModal_message={setModal_message}
        />
        { id ? <Dialoge refetch_chat={chatQuery.refetch} id={id} />
         : <Main_messages modal_message={modal_message} setModal_message={setModal_message} /> }

        <Chats data={chatQuery.data} refetch={chatQuery.refetch}/>
      </div>
    </div>
  );
}

export default new_component(login(Messages));
