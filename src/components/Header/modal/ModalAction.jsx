import React from 'react'
import Modal from './Modal'
import './ModalActive.css'
import none_icon from '../../../none.jpg'
import PropTypes from 'prop-types';

function ModalAction({actionModal}) {
    return (
        <Modal classes='model_action'>
            <div className="modal__action">
                {actionModal.length ? actionModal.map(item => {
                    return <div key={item.id} className='action__grid'>
                                <div className='action__grid-img'>
                                    <img src={item.user_id.image_url ? item.user_id.image_url : none_icon} alt="" />
                                </div>
                                <div className='action__grid-text'>
                                    {item.action === 'Лайк' &&  <p><span>{item.user_id.name}</span>поставил(-а) лайк вашей публикации</p>}
                                    {item.action === 'Комментарий' &&  <p><span>{item.user_id.name}</span>прокомментировал(-а) вашу публикацию</p>}
                                </div>
                                <div>
                                    {item.post_id && (
                                        <div className='action__grid-photo'>
                                            <img src={item.post_id.photo_url} alt="" />
                                        </div>
                                    )}
                                </div>
                            </div> 
                }) : <div className='action_none'>
                        <p>Действия с вашими публикациями</p>
                        <p>Здесь будут показаны отметки "Нравится" и комментарии к вашим публикациям</p>
                    </div> }       
            </div>
        </Modal>
    )
}

ModalAction.propTypes = {
    actionModal: PropTypes.array
}

export default ModalAction
