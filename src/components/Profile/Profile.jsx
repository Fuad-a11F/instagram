import React from "react";
import login from "../hoc/login";
import new_component from "../hoc/new_component";
import ProfilePublished from "./ProfilePublished";
import ProfileSaved from "./ProfileSaved";
import ProfileTop from "./ProfileTop";
import ProfileAdd from "./ProfileAdd";
import ProfileNav from "./ProfileNav";
import parseJwt from "../../parseJWT";

function get_id(str) {
  if (parseInt(str.slice(str.lastIndexOf('/') + 1)))
    return parseInt(str.slice(str.lastIndexOf('/') + 1))
  let substr = str.slice(1)
  return parseInt(substr.slice(substr.indexOf('/') + 1, substr.lastIndexOf('/')))
}


function Profile({ id, main_page }) {
  function check_id_and_jwd_id() {
    if (parseJwt(localStorage.getItem('token')).id === get_id(id))  {
      return true
    }
    return false
  }

  let [nav, setNav] = React.useState([
    { title: "Публикации", path: "/profile/id", checked: true },
    { title: "Сохраненные", path: "/profile/saved", checked: false },
    { title: "Добавить", path: "/profile/id/add", checked: false },
  ]);

  React.useEffect(() => {
    let check_item = sessionStorage.getItem('item')
    if (check_item) {
        setNav((prev) => {
            return prev.map(item => {
                if (item.title === check_item) {
                    return {...item, checked: true}
                }
                else {
                    return {...item, checked: false}
                } 
            })
        })
    }
  }, [])

  return (
    <div className="container_1">
      <ProfileTop check_id_and_jwd_id={check_id_and_jwd_id} id={get_id(id)}/>
      <ProfileNav check_id_and_jwd_id={check_id_and_jwd_id} id={get_id(id)} nav={nav} setNav={setNav}/>
      {main_page === "published" && <ProfilePublished check_id_and_jwd_id={check_id_and_jwd_id} id={get_id(id)} />}
      {main_page === "saved" && <ProfileSaved />}
      {main_page === "add" && <ProfileAdd setNav={setNav}/>}
    </div>
  );
}

export default new_component(login(Profile));
