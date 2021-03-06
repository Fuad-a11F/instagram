import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

function SideBar__footer({sideBar}) {
    return (
        <div className={sideBar ?  'center_set' : ''}>
            <div className={sideBar ?  'SideBar__footer__row not_sideBar_row' : 'SideBar__footer__row'}>
                <NavLink className='SideBar__footer__link' to='/'>Информация</NavLink>
                <NavLink className='SideBar__footer__link' to='/'>Помощь</NavLink>
                <NavLink className='SideBar__footer__link' to='/'>Пресса</NavLink>
                <NavLink className='SideBar__footer__link' to='/'>API</NavLink>
                <NavLink className='SideBar__footer__link' to='/'>Вакансии</NavLink>
                <NavLink className='SideBar__footer__link' to='/'>Конфиденциальность</NavLink>
                <NavLink className='SideBar__footer__link' to='/'>Условия</NavLink>
                <NavLink className='SideBar__footer__link' to='/'>Места</NavLink>
            </div>
            <div className='SideBar__footer__certificate'>© INSTAGRAM ОТ FACEBOOK, 2021</div>
        </div>
        
    )
}
SideBar__footer.propTypes  = {
    sideBar: PropTypes.bool
}

export default SideBar__footer
