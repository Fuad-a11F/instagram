import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { CHANGE_MAIN_DATA, GET_USER } from "../../GraphQl/Queries";
import upload_image from "../../upload";
import none_icon from "../../none.jpg";
import SettingForm from "./SettingForm";

function SettingMain() {
  let { error, loading, data, refetch } = useQuery(GET_USER, {
    variables: { token: localStorage.getItem("token") },
  });
  let [changeMainData, dates] = useMutation(CHANGE_MAIN_DATA);
  let ref_file_input = React.useRef()
  let [nameSetting, setNameSetting] = React.useState("Загрузка...");
  let [nickNameSetting, setNickNameSetting] = React.useState("Загрузка...");
  let [emailSetting, setEmailSetting] = React.useState("Загрузка...");
  let [numberSetting, setNumberSetting] = React.useState("Загрузка...");
  let [genderSetting, setGenderSetting] = React.useState("Загрузка...");
  let [siteSetting, setSiteSetting] = React.useState("Загрузка...");
  let [aboutSetting, setAboutSetting] = React.useState("Загрузка...");
  let [mainPhoto, setMainPhoto] = React.useState()

  React.useEffect(() => {
    if (data) {
      setNameSetting(data.getUser.name);
      setNickNameSetting(data.getUser.nickname);
      setEmailSetting(data.getUser.email);
      setNumberSetting(data.getUser.number);
      setGenderSetting(data.getUser.gender);
      setSiteSetting(data.getUser.site);
      setAboutSetting(data.getUser.about_me);
      setMainPhoto(data.getUser.image_url);
    }
  }, [data]);

  React.useEffect(() =>  {
    if (dates.data) console.log(dates.data);
  }, [dates.data])

  function change_main_data(e) {
    e.preventDefault();
    changeMainData({
      variables: {
        token: localStorage.getItem("token"),
        name: nameSetting,
        nickname: nickNameSetting,
        email: emailSetting,
        number: numberSetting,
        site: siteSetting,
        about_me: aboutSetting,
        gender: genderSetting,
        image_url: mainPhoto
      },
    });
    refetch()
  }

  function load_image(e) {
    upload_image(e, setMainPhoto)
  }

  return (
    <div className="settingMain">
      <div className="settingMain__top ">
        <img src={mainPhoto ? mainPhoto : none_icon} alt="" />
        <p>{nickNameSetting && nickNameSetting}</p>
        <input ref={ref_file_input} onChange={(e) => load_image(e)} type="file" />
        <button onClick={() => ref_file_input.current.click()}>сменить фото профиля</button>
      </div>
      <div className="settingMain__form">
        <form action="#" onSubmit={(e) => change_main_data(e)}>
          <SettingForm
            title="Имя"
            setChange={setNameSetting}
            change={nameSetting}
          />
          <p>
            Чтобы людям было проще находить ваш аккаунт, используйте имя, под
            которым вас знают: ваше имя и фамилию, никнейм или название
            компании.
          </p>
          <SettingForm
            title="Имя пользователя"
            setChange={setNickNameSetting}
            change={nickNameSetting}
          />
          <p>
            В большинстве случаев у вас будет ещё 14 дней, чтобы снова поменять
            имя пользователя на fuadqyulmamedov.
          </p>
          <SettingForm
            title="Веб-сайт"
            setChange={setSiteSetting}
            change={siteSetting}
          />
          <SettingForm
            title="О себе"
            setChange={setAboutSetting}
            change={aboutSetting}
          />
          <p className="form__input-title">Личная информация</p>
          <p>
            Укажите личную информацию, даже если аккаунт будет использоваться
            для компании, домашнего животного или в других целях. Эти сведения
            не будут показываться в вашем общедоступном профиле.
          </p>
          <SettingForm
            title="Эл. адрес"
            setChange={setEmailSetting}
            change={emailSetting}
          />
          <SettingForm
            title="Номер телефона"
            setChange={setNumberSetting}
            change={numberSetting}
          />
          <SettingForm
            title="Пол"
            setChange={setGenderSetting}
            change={genderSetting}
          />
          <div className="form__send-row">
            <button className="button_set">Сохранить</button>
            <button className="button_set_del main_btn">
              Временно отключить мой аккаунт
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingMain;
