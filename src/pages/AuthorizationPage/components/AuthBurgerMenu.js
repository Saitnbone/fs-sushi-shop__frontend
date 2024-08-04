import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'

export const AuthBurgerMenu = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false); /* добавим состояние, которое будет определять, показывать
    ли блок с информацией */
    const handelClickButton = () =>{
        setShowBurgerMenu(!showBurgerMenu); // при каждом нажатии на кнопку изменяем значение showInfo на противоположное
    }
  return (
    <div className='auth_block_burger_nav'>
        <AiOutlineMenu onClick={handelClickButton} className='auth_block_burger_menu_icon'/>
        <div className={`auth_block_burger_menu ${showBurgerMenu ? "auth_block_burger_show_info": ""}`}>
            <ul>
                <li className=''><Link to={'/'}>Home Page</Link></li>
                <li className=''><Link to={'/'}>Menu</Link></li>
                <li className=''><Link to={'/basket'}>Basket</Link></li>
                <li className=''><Link to={'/contacts'}>Contacts</Link></li>
                <li className=''><Link to={'/location'}>Location</Link></li>
            </ul>
        </div>
    </div>
  )
};
export default AuthBurgerMenu;