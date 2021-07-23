import React from "react";
import Hint_friend from "./Hint_friend";
import Hint_number from "./Hint_number";
import Hint_photo from "./Hint_photo";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import { useMutation, useQuery } from "@apollo/client";
import { GET_HINT_COMPONENT_FRIEND, GET_HINT_COMPONENT_NUMBER, GET_HINT_COMPONENT_PHOTO, REMOVE_HINT } from "../../GraphQl/Queries";
import PropTypes from 'prop-types';

function Hint_Component({refetch}) {
  let hint_friend = useQuery(GET_HINT_COMPONENT_FRIEND, {variables: {token: localStorage.getItem('token')}})
  let hint_number = useQuery(GET_HINT_COMPONENT_NUMBER, {variables: {token: localStorage.getItem('token')}})
  let hint_photo = useQuery(GET_HINT_COMPONENT_PHOTO, {variables: {token: localStorage.getItem('token')}})
  let [friend, setFriend] = React.useState(true)
  let [number, setNumber] = React.useState(true)
  let [photo, setPhoto] = React.useState(true)
  let [RemoveHint] = useMutation(REMOVE_HINT)

  React.useEffect(() => {
    if (hint_friend.data) setFriend(hint_friend.data.getHintComponentFriend);
  }, [hint_friend.data])
  React.useEffect(() => {
    if (hint_number.data) setNumber(hint_number.data.getHintComponentNumber);
  }, [hint_number.data])
  React.useEffect(() => {
    if (hint_photo.data) setPhoto(hint_photo.data.getHintComponentPhoto);
  }, [hint_photo.data])

  function hide_hint() {
    RemoveHint({variables: {token: localStorage.getItem('token')}})
    refetch()
  }

  return (
        <div className='hint__wrapper'>
          {(!friend || !number || !photo) && <div className='hint_top'><p className='first__step'>Первые шаги</p><button onClick={() => hide_hint()}>Не показывать больше</button></div> }
          <Swiper spaceBetween={5} slidesPerView={2.5}>
            {!friend && <SwiperSlide><Hint_friend /></SwiperSlide>}
            {!number && <SwiperSlide><Hint_number /></SwiperSlide>}
            {!photo && <SwiperSlide><Hint_photo /></SwiperSlide>}
          </Swiper>           
        </div>   
  );
}

Hint_Component.propTypes  = {
  refetch: PropTypes.func
}

export default Hint_Component;
