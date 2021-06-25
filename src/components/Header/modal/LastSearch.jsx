import React from 'react'
import none_image from  '../../../none.jpg'
import { NavLink } from 'react-router-dom'

function LastSearch({data}) {
    
    return (
            <>
             <h4>Недавние</h4>
                {data.getSearch.length === 0 ?
                    <>         
                        <div className="search__result_no">
                            Нет недавних запросов
                        </div>
                    </> : 
                    <div className="search__result">
                      
                        {data.getSearch.map((item, index) => {
                            return (
                                <NavLink className='navlink__search' key={index} to={'/profile/' + item.id}>
                                    <div className='search__grid'>
                                        <img src={item.image_url ? item.image_url : none_image} className='search__image' width='40' height='40' alt="" />
                                        <p className='search__name'>{item.name}</p>
                                        <p className='search__nickname'>{item.nickname}</p>
                                    </div>
                                </NavLink>
                            )
                        })}                         
                    </div>
                } 
            </>
  
        )
}

export default LastSearch
