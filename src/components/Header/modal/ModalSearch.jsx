import React from "react";
import LastSearch from "./LastSearch";
import Modal from "./Modal";
import { CircularProgress } from "@material-ui/core";
import { NavLink } from 'react-router-dom'
import { useMutation } from "@apollo/client";
import { ADD_SEARCH } from "../../../GraphQl/Queries";
import none_image from  '../../../none.jpg'

function ModalSearch({ result_search, data }) {
    let [addSearch] = useMutation(ADD_SEARCH)

    function add_search(id) {
        addSearch({variables: {token: localStorage.getItem('token'), search_id: id}})
        // обновить состояние после добавление search
    }

  return (
    <Modal classes="">

      {data ? (
        <div className="modal__search">
          {Array.isArray(result_search) ? 
            result_search.length === 0 ? (
              <LastSearch data={data} />
            ) :  (
              result_search.map(item => {
                  return <NavLink className='navlink__search' key={item.id} onClick={() => add_search(item.id)} to={'/profile/' + item.id}>
                          <div className='search__grid'>
                            <img src={item.image_url ? item.image_url : none_image} className='search__image' width='40' height='40' alt="" />
                            <p className='search__name'>{item.name}</p>
                            <p className='search__nickname'>{item.nickname}</p>
                          </div>
                        </NavLink>
    
              })
            ) :
            <p className='search__result_no'>Ничего не найдено</p>
          }

        </div>
      ) : (
        <div className="modal__search _loading">
          <CircularProgress />
        </div>
      )}
    </Modal>
  );
}

export default ModalSearch;
