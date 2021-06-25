import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { CHANGE_PASSWORD, GET_PASSWORD } from "../../GraphQl/Queries";
import none_icon from "../../none.jpg";
import SettingForm from "./SettingForm";

function SettingChange() {
  let { error, loading, data, refetch } = useQuery(GET_PASSWORD, {
    variables: { token: localStorage.getItem("token") },
  });
  let [changePassword] = useMutation(CHANGE_PASSWORD);
  let [values, setValues] = React.useState("Загрузка...");
  let [writeOldPassword, setWriteOldPassword] = React.useState();
  let [writeNewPassword, setWriteNewPassword] = React.useState();
  let [confirmNewPassword, setConfirmNewPassword] = React.useState();

  React.useEffect(() => {
    if (data) setValues(data.getPassword);
  }, [data]);

  React.useEffect(() => {
    refetch()
  }, [])

  function change_password(e) {
    e.preventDefault();
    if (writeNewPassword === confirmNewPassword) {
      changePassword({
        variables: {
          token: localStorage.getItem("token"),
          old_password: writeOldPassword,
          new_password: writeNewPassword,
        },
      });
    } else {
      alert("kek");
    }
  }

  return (
    <div className="settingChange">
      <div className="settingChange__top ">
        {console.log(values)}
        <img src={values.image_url ? values.image_url : none_icon} alt="" />
        <p>{values.nickname}</p>
      </div>
      <div className="settingMain__form">
        <form action="#" onSubmit={(e) => change_password(e)}>
          <SettingForm
            title="Старый пароль"
            setChange={setWriteOldPassword}
            change={writeOldPassword}
          />
          <SettingForm
            title="Новый пароль"
            setChange={setWriteNewPassword}
            change={writeNewPassword}
          />
          <SettingForm
            title="Подтвердите новый пароль"
            setChange={setConfirmNewPassword}
            change={confirmNewPassword}
          />
          <button className="button_set change_pas">Сменить пароль</button>
        </form>
          <button className="button_set_del forget_pas">Забыли пароль?</button>
      </div>
    </div>
  );
}

export default SettingChange;
