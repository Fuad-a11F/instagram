import Hint_Component from '../hint/Hint_Component'
import React from 'react'
import ProfilePublishedWrapper from './ProfilePublishedWrapper'
import { useQuery } from '@apollo/client'
import { GET_HINT } from '../../GraphQl/Queries'

function ProfilePublished({id, check_id_and_jwd_id}) {
    let { data, refetch } = useQuery(GET_HINT, {variables: {token: localStorage.getItem('token')}})
    let [hint, setHint] = React.useState()

    React.useEffect(() => {
        if (data) setHint(data.getHint)
    }, [data])

    return (
        <div>
            {hint && (check_id_and_jwd_id() && <Hint_Component refetch={refetch}/>)}                  
            <ProfilePublishedWrapper id={id}/>
        </div>
    )
}

export default ProfilePublished
