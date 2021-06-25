import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SUBSCRIBERS } from "../../GraphQl/Queries";
import none_icon from "../../none.jpg";
import { NavLink } from "react-router-dom";

function ProfileLengthSubscribers({ hint_ref, id }) {
  let { error, loading, data } = useQuery(GET_SUBSCRIBERS, {
    variables: { id: id },
  });
  let [subscribers, setSubscribers] = React.useState();

  React.useEffect(() => {
    if (data) setSubscribers(data.getSubscribers);
  }, [data]);

  function open_name(e) {
      e.target.nextElementSibling.classList.add('open_name_display')
  }
  function close_name(e) {
    e.target.nextElementSibling.classList.remove('open_name_display')
  }

  return (
    <>
      {subscribers && (
        <div ref={hint_ref} className="length__subscribers">
          {subscribers.map((item) => {
            return (
              <NavLink key={item.id} className="navLink__length-subs" onClick={() => hint_ref.current.classList.remove("open_hint_profile")} to={"/profile/" + item.id}>
                <img onMouseLeave={(e) => close_name(e)} onMouseOver={(e) => open_name(e)} key={item.id} src={item.image_url ? item.image_url : none_icon} width="50" height="50" alt=""/>
                <p className='navLink__length-subs__name'>{item.name}</p>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ProfileLengthSubscribers;
