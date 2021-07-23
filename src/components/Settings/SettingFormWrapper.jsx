import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { CHANGE_MAIN_DATA, GET_USER } from '../../GraphQl/Queries';
import SettingForm from './SettingForm';

const SettingFormWrapper = ({ mainPhoto, setMainPhoto, nickNameSetting,setNickNameSetting
 }) => {
    let { data, refetch } = useQuery(GET_USER, {variables: {token: localStorage.getItem('token')}});
    let [nameSetting, setNameSetting] = React.useState("Загрузка...");
    let [emailSetting, setEmailSetting] = React.useState("Загрузка...");
    let [numberSetting, setNumberSetting] = React.useState("Загрузка...");
    let [genderSetting, setGenderSetting] = React.useState("Загрузка...");
    let [siteSetting, setSiteSetting] = React.useState("Загрузка...");
    let [aboutSetting, setAboutSetting] = React.useState("Загрузка...");
    let [changeMainData, dates] = useMutation(CHANGE_MAIN_DATA);
    let btn_ref = React.useRef()
    
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
    
    async function change_main_data(e) {
        btn_ref.current.textContent = 'Загрузка...'
        e.preventDefault();
        await changeMainData({
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
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
        btn_ref.current.textContent = 'Сохранить'
    }

    return (
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
            имя пользователя на старое.
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
            <button ref={btn_ref} className="button_set">Сохранить</button>
            <button className="button_set_del main_btn">
              Удалить мой аккаунт 
            </button>
          </div>
        </form>
      </div>
    )
}

export default SettingFormWrapper
