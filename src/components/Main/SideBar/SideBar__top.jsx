import React from 'react'
import './SideBar.css'
import none_icon from '../../../none.jpg'
import { useQuery } from '@apollo/client'
import { GET_MAIN_USER } from '../../../GraphQl/Queries'

function SideBar__top() {
    let { data } = useQuery(GET_MAIN_USER, {variables: {token: localStorage.getItem('token')}})
    let [mainUser, setMainUser] = React.useState()
    React.useEffect(() => {
        if (data) setMainUser(data.getMainUser);
    }, [data])

    return (
        <div className='SideBar__top'>
            {mainUser && 
            <>
                <div className='SideBar__top__picture'>
                    <img className='SideBar__top__ava' width='55' height='55' src={mainUser.image_url ? mainUser.image_url : none_icon} alt="" />
                </div>
                <div className='SideBar__top__login'>{mainUser.nickname}</div>
                <div className='SideBar__top__name'>{mainUser.name}</div>
            </>
            }
        </div>
    )
}

export default SideBar__top
