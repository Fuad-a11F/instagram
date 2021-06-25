import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_SUBSCRIBTION } from '../../GraphQl/Queries'
import none_icon from '../../none.jpg'
import {NavLink} from 'react-router-dom'

function ProfileLengthSubscription({hint_ref_2, id}) {
    let {error, loading, data}  = useQuery(GET_SUBSCRIBTION, {variables:  {id: id}})
    let [subscribtion, setSubscribtion] = React.useState()

    React.useEffect(() =>  {
        if (data) setSubscribtion(data.getSubscribtion);
    }, [data])
    
    function open_name(e) {
        e.target.nextElementSibling.classList.add('open_name_display')
    }
    function close_name(e) {
      e.target.nextElementSibling.classList.remove('open_name_display')
    }

    return (
        <>
            {subscribtion && <div ref={hint_ref_2} className='length__subscribers'>          
                {subscribtion.map(item => {            
                    return <NavLink key={item.id} className='navLink__length-subs' onClick={() => hint_ref_2.current.classList.remove('open_hint_profile')} to={'/profile/'+item.id}>
                            <img onMouseLeave={(e) => close_name(e)} onMouseOver={(e) => open_name(e)} onMouseLeave={(e) => close_name(e)} key={item.id} src={item.image_url ? item.image_url : none_icon} width='50' height='50' alt="" />
                            <p className='navLink__length-subs__name'>{item.name}</p>
                        </NavLink>
                })}
            </div>}
        </>
    )
}

export default ProfileLengthSubscription
