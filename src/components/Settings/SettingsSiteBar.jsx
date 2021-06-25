import React from "react";
import { NavLink } from "react-router-dom";

function SettingsSiteBar({ menu, setMenu }) {
  return (
    <div className="setting__nav">
      <ul>
        <li
          className={menu === "main" ? "_active_set link-item" : "link-item"}
          onClick={() => setMenu("main")}>
          <NavLink className='setting_nav' to='main'>Редактировать профиль</NavLink>
        </li>
        <li
          className={menu === "change" ? "_active_set link-item" : "link-item"}
          onClick={() => setMenu("change")}>
          <NavLink className='setting_nav' to='change'>Сменить пароль</NavLink>
        </li>
        <li
          className={menu === "save" ? "_active_set link-item" : "link-item"}
          onClick={() => setMenu("save")}>
          <NavLink className='setting_nav' to='save'>Конфиденциальность и безопасность</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SettingsSiteBar;
