import React from "react";
import login from "../hoc/login";
import new_component from "../hoc/new_component";
import ProfilePublished from "./ProfilePublished";
import ProfileSaved from "./ProfileSaved";
import ProfileTop from "./ProfileTop";
import ProfileAdd from "./ProfileAdd";
import ProfileNav from "./ProfileNav";
import parseJwt from "../../parseJWT";
import { useQuery } from "@apollo/client";
import { GET_USER_BLOCK } from "../../GraphQl/Queries";
import ProfileBlockMe from "./ProfileBlockMe";
import ProfileBlockSomeone from "./ProfileBlockSomeone";
import { useLocation } from "react-router-dom";

export function get_id(str) {
  if (parseInt(str.slice(str.lastIndexOf('/') + 1)))
    return parseInt(str.slice(str.lastIndexOf('/') + 1))
  let substr = str.slice(1)
  return parseInt(substr.slice(substr.indexOf('/') + 1, substr.lastIndexOf('/')))
}

function Profile({ id, main_page }) {
  let location = useLocation()
  function check_id_and_jwd_id() {
    if (parseJwt(localStorage.getItem('token')).id === get_id(id))  {
      return true
    }
    return false
  }

  let [nav, setNav] = React.useState([
    { title: "Публикации", path: "/profile/id", checked: true },
    { title: "Сохраненные", path: "/profile/id/saved", checked: false },
    { title: "Добавить", path: "/profile/id/add", checked: false },
  ]);

  React.useEffect(() => {
    if (location.pathname.includes('saved')) {
      setNav(prev => prev.map(item => {
        if (item.title === 'Сохраненные') return {...item, checked: true}
        else return {...item, checked: false}
      }))
    }
    if (location.pathname.includes('add')) {
      setNav(prev => prev.map(item => {
        if (item.title === 'Добавить') return {...item, checked: true}
        else return {...item, checked: false}
      }))
    }
    if (!location.pathname.includes('add') && !location.pathname.includes('saved')) {
      setNav(prev => prev.map(item => {
        if (item.title === 'Публикации') return {...item, checked: true}
        else return {...item, checked: false}
      }))
    }
  }, [location])

  let { data, refetch} = useQuery(GET_USER_BLOCK, {variables: {token: localStorage.getItem('token'), id: get_id(id)}})
  let [block, setBlock] = React.useState("")

  React.useEffect(() => {
    if (data) setBlock(data.getUserBlock);
  }, [data])

  return (
    <div className="container">
      {block && (
        <>
            {block === 'Вы добавили пользователя в черный список' && <ProfileBlockMe refetch={refetch} id={get_id(id)}/>}
            {block === 'Вы у пользователя в черном списке' && <ProfileBlockSomeone />}
            {block === 'Ок' && (
              <>
                <ProfileTop refetch={refetch} data={data} check_id_and_jwd_id={check_id_and_jwd_id} id={get_id(id)}/>
                <ProfileNav check_id_and_jwd_id={check_id_and_jwd_id} id={get_id(id)} nav={nav} />
                {main_page === "published" && <ProfilePublished check_id_and_jwd_id={check_id_and_jwd_id} id={get_id(id)} />}
                {main_page === "saved" && <ProfileSaved id={get_id(id)}/>}
                {main_page === "add" && <ProfileAdd setNav={setNav}/>}
              </>
            )}
        </>
      )}


    </div>
  );
}

export default new_component(login(Profile));
