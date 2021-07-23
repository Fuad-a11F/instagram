import React from "react";
import { NavLink } from "react-router-dom";

function SettingsSiteBar() {
  let location = window.location.pathname
  return (
    <div className="setting__nav">
      <ul>
        <li
          className={location.includes('main') ? "_active_set link-item" : "link-item"}>
          <NavLink className='setting_nav' to='main'>Редактировать профиль</NavLink>
        </li>
        <li
          className={location.includes('change') ? "_active_set link-item" : "link-item"}>
          <NavLink className='setting_nav' to='change'>Сменить пароль</NavLink>
        </li>
        <li
          className={location.includes('save') ? "_active_set link-item" : "link-item"}>
          <NavLink className='setting_nav' to='save'>Конфиденциальность и безопасность</NavLink>
        </li>
      </ul>
    </div>
  );
}


export default SettingsSiteBar;
