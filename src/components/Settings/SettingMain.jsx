import React from "react";
import none_icon from "../../none.jpg";
import 'firebase/storage'
import firebase from 'firebase/app'
import { CircularProgress } from '@material-ui/core'
import SettingFormWrapper from "./SettingFormWrapper";

function SettingMain() {
  let storage12 = firebase.storage()
  let [mainPhoto, setMainPhoto] = React.useState()
  let [imgLoading, setImgLoading] = React.useState(false)
  let ref_file_input = React.useRef()
  let page_ref = React.useRef()
  let [nickNameSetting, setNickNameSetting] = React.useState("Загрузка...");

  function load_image(e) {
    let ref = storage12.ref(`mainImage/${e.target.files[0].name}`)
    let task = ref.put(e.target.files[0])
    task.on('state_changed', snapshot => {
        console.log(snapshot);
        setImgLoading(true)
    }, error => {
        console.log(error);
    }, () => {
      task.snapshot.ref.getDownloadURL().then(async url => {
        setTimeout(() => setImgLoading(false), 300)
        setMainPhoto(url)
      })
    })
  }

  return (
    <div ref={page_ref} className="settingMain">
      <div className="settingMain__top ">
        <div className='setting__image-wrapper'>
          <img src={mainPhoto ? mainPhoto : none_icon} alt="" />
          {imgLoading && <div className='image_loading'>
            <CircularProgress color="inherit"/>
          </div>}
        </div>
        <p>{nickNameSetting && nickNameSetting}</p>
        <input ref={ref_file_input} onChange={(e) => load_image(e)} type="file" />
        <button onClick={() => ref_file_input.current.click()}>сменить фото профиля</button>
      </div>
      <SettingFormWrapper setNickNameSetting={setNickNameSetting} nickNameSetting={nickNameSetting}  mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} />
    </div>
  );
}

export default SettingMain;
