import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import ModalAction from "./modal/ModalAction";
import ModalProfile from "./modal/ModalProfile";
import home_no from "./images/home_no.png";
import home_yes from "./images/home_yes.png";
import Dialog_link from "./Dialog_link";
import heart_no from "./images/heart_no.png";
import heart_yes from "./images/heart_yes.png";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_PHOTO, READ_ACTION } from "../../GraphQl/Queries";
import none_icon from "../../none.jpg";
import { GET_ACTION } from "../../GraphQl/Queries";
import PropTypes from "prop-types";

function Navigation({ setProfile, setAction, action, profile }) {
  const { pathname } = useLocation();
  let { data } = useQuery(GET_USER_PHOTO, {
    variables: { token: localStorage.getItem("token") },
  });
  let actions = useQuery(GET_ACTION, {
    variables: { token: localStorage.getItem("token") },
  });
  let [actionModal, setActionModal] = React.useState();
  let [actionModalLooked, setActionModalLooked] = React.useState();
  let [readAction] = useMutation(READ_ACTION);
  
  React.useEffect(() => {
    if (actions.data) {
      setActionModal(actions.data.getAction);
      setActionModalLooked(() => {
        let counter = 0;
        actions.data.getAction.map((item) => {
          if (!item.is_looked) counter++;
        });
        return counter;
      });
    }
  }, [actions.data]);

  async function setModalOpen(func, obj) {
    setAction(false);
    setProfile(false);
    func(!obj);
    await readAction({ variables: { token: localStorage.getItem("token") } });
    actions.refetch();
  }

  return (
    <div className="header__column nav__row">
      <NavLink className="item" to="/">
        <img
          src={pathname === "/" && !action ? home_yes : home_no}
          alt=""
          width="25"
          height="25"
        />
      </NavLink>
      
      <Dialog_link action={action} pathname={pathname}/>

      <span className="item" onClick={() => setModalOpen(setAction, action)}>
        <span className={!actionModalLooked == 0 ? "new_action" : ""}></span>
        <img
          src={action ? heart_yes : heart_no}
          alt=""
          width="25"
          height="25"
        />
      </span>
      {action && <ModalAction actionModal={actionModal} />}
      {profile && <ModalProfile />}
      <span className="item" onClick={() => setModalOpen(setProfile, profile)}>
        {data && (
          <img
          className={
            (pathname.includes("profile") && !action) ||
            (pathname.includes("setting") && !action)
              ? "active_nav avatar"
              : "avatar"
          }
          src={data.getUserPhoto.image_url ? data.getUserPhoto.image_url : none_icon}
          width="25"
          height="25"
        />
        )}
        
      </span>
    </div>
  );
}

Navigation.propTypes = {
  setProfile: PropTypes.func,
  setAction: PropTypes.func,
  action: PropTypes.bool,
  prction: PropTypes.bool,
};

export default React.memo(Navigation);
