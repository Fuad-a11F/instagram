import React from "react";
import login from "../hoc/login";
import new_component from "../hoc/new_component";
import Dialoge from "./Dialoge.jsx";
import Chats from "./chats";
import Main_messages from "./Main_messages";
import "./Messages.css";
import Name from "./Name";

function Messages({ id }) {
  let [modal_message, setModal_message] = React.useState(false);
  return (
    <div className="container">
      <div className="dialoge">
        <Name
          modal_message={modal_message}
          setModal_message={setModal_message}
        />
        { id ? <Dialoge id={id} />
         : <Main_messages modal_message={modal_message} setModal_message={setModal_message} /> }

        <Chats />
      </div>
    </div>
  );
}

export default new_component(login(Messages));
