import { useLazyQuery, useQuery } from '@apollo/client'
import React from 'react'
import { GET_USERS, GET_SEARCH } from '../../GraphQl/Queries'
import search_icon from './images/loupa.svg'
import ModalSearch from './modal/ModalSearch'

function Search({setAction, setProfile}) {
    let [search, setSearch] = React.useState(true)
    let [peopleSearch, setPeopleSearch] = React.useState([])
    let [lastSearch, setLastSearch] = React.useState()
    let input_ref = React.useRef()  
    let [getUserSearch, {loading, data}] = useLazyQuery(GET_USERS)
    let [getSearch, params] = useLazyQuery(GET_SEARCH)

    React.useEffect(() => {
        if (params.data) setLastSearch(params.data);  
    }, [params.data])

    React.useEffect(() => {
        if (data) {
            if (data.getUsers.length === 0) {
                setPeopleSearch('Не найдено!')
            }
            else
                setPeopleSearch(data.getUsers);
        }
    }, [data])

    function focus(){
        setSearch(false)
        setAction(false)
        setProfile(false)
        getSearch({variables: {token: localStorage.getItem('token')}})
    }
    function  blur(e){
        if (!e.target.closest('.modal') && !e.target.closest('.input'))  {
            setSearch(true)
            setPeopleSearch([])
        }     
    }

    let delay_search
    function search_user(e) {
        clearTimeout(delay_search)
        delay_search = setTimeout(()  => {
            getUserSearch({  variables:{name:input_ref.current.value} })
        }, 600)        
    }

    React.useEffect(() => {
        input_ref.current.addEventListener('focus', focus)
        window.addEventListener('click', blur)
        return () =>
        {
            try {
                input_ref.current.removeEventListener('focus',focus)
                window.current.removeEventListener('click',blur)
            } catch (error) {}
        }
    }, [])

    return (
        <div className='header__column search__row'>
            <img className={search ? 'icon search_left' : 'icon'} width='13' height='13' src={search_icon} alt="" />
            <input className={search ? 'input text_center' : 'input'} ref={input_ref} onChange={(e) => search_user(e)} type="text" placeholder='Поиск'/>
            <button className={search ? 'header__button hidden' : 'header__button'} ></button>
            {!search && <ModalSearch getSearch={getSearch} result_search={peopleSearch} params={params} data={lastSearch}/>}        
        </div>
    )
}

export default Search
