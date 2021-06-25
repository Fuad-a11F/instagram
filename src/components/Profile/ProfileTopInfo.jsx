import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { ADD_SUBSCRIBE, GET_SUBSCRIBER, REMOVE_SUBSCRIBE } from '../../GraphQl/Queries'
import ProfileLengthSubscribers from './ProfileLengthSubscribers'
import ProfileLengthSubscription from './ProfileLengthSubscription'

function ProfileTopInfo({userTopData, check_id_and_jwd_id, id, refetch}) {
    let [addSubscribe] = useMutation(ADD_SUBSCRIBE)
    let [removeSubscribe] = useMutation(REMOVE_SUBSCRIBE)
    let query = useQuery(GET_SUBSCRIBER, {variables: {token: localStorage.getItem('token'), subscriber_id: id}})
    let [state, setState] = React.useState()
    let hint_ref = React.useRef()
    let hint_ref_2 = React.useRef()

    React.useEffect(() => {
        if (query.data) setState(query.data.getSubscriber);
    }, [query.data])

    function add_subscriber() {
        addSubscribe({variables: {token: localStorage.getItem('token'), subscriber_id: id}})
        refetch()
        query.refetch()
    }

    function remove_subscriber() {
        removeSubscribe({variables: {token: localStorage.getItem('token'), subscriber_id: id}})
        refetch()
        query.refetch()
    }

    function open_hint() {
        try {
            hint_ref.current.classList.add('open_hint_profile')
        } catch (error) {}
    }
    function open_hint_1() {
        try {
            hint_ref_2.current.classList.add('open_hint_profile')
        } catch (error) {}
    }
    function close_hint(e) { 
        try {
            hint_ref.current.classList.remove('open_hint_profile')
        } catch (error) {}    
    }
    function close_hint_2(e) { 
        try {
            hint_ref_2.current.classList.remove('open_hint_profile')
        } catch (error) {}    
    }
    return (
        <div>
            <div className="profileTopInfo__row">
                <div className='profileTopInfo__name'>{userTopData.name}</div>
                {check_id_and_jwd_id() ? 
                <>
                    <div className='profileTopInfo__update-btn'><button>Редактировать профиль</button></div>
                    <div className='profileTopInfo__setting'>setting</div>
                </> :
                <>
                    {!state ? <div className='profileTopInfo__update-btn subscribe' onClick={() => add_subscriber()}><button>Подписаться</button></div> : 
                    <div className='profileTopInfo__update-btn subscribe _done' onClick={() => remove_subscriber()}><button>Отписаться</button></div>}
                    <div className='profileTopInfo__setting'>set</div>
                </>
                }
            </div>
            <div className="profileTopInfo__row">
                <div className='profileTopInfo__column'>
                    <span>{userTopData.post_length}</span>
                    <p>Публикаций</p>
                </div>   
                <div onMouseLeave={(e) => close_hint(e)} className='profileTopInfo__column'>
                    <div onMouseOver={() => open_hint()} className='profileTopInfo__body'>
                        <span>{userTopData.subscribers_length}</span>
                        <p className='profile_info_subs'>Подписчиков</p>
                    </div>
                    <ProfileLengthSubscribers hint_ref={hint_ref} id={id}/>
                </div>    
                <div onMouseLeave={(e) => close_hint_2(e)} className='profileTopInfo__column'>
                    <div onMouseOver={() => open_hint_1()} className='profileTopInfo__body'>
                        <span>{userTopData.subscriptions_length}</span>
                        <p>Подписок</p>
                    </div>
                    <ProfileLengthSubscription hint_ref_2={hint_ref_2} id={id}/>
                </div>                                
            </div>
            <div className='real-name'>kjhvhhj</div>
        </div>
    )
}

export default ProfileTopInfo
