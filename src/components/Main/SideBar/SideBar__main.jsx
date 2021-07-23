import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_RECOMMEND } from '../../../GraphQl/Queries'
import SideBar__recom__items from './SideBar__recom__items'

function SideBar__main() {
    let {data} = useQuery(GET_RECOMMEND, {variables: {token: localStorage.getItem('token')}})

    React.useEffect(() => {
        if (data) console.log(data);
    }, [data])

    return (
        <div className='SideBar__main'>
            <div className="SideBar__main__top">
                <p>Рекомендации для вас (не работают)</p>
                <button>Все</button>
            </div>
            <SideBar__recom__items />
            <SideBar__recom__items />
            <SideBar__recom__items />
            <SideBar__recom__items />
            <SideBar__recom__items />
        </div>
    )
}

export default SideBar__main
