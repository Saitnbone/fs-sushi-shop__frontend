import React from 'react'
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'

export const AuthBurgerMenu = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false); /* добавим состояние, которое будет определять, показывать
    ли блок с информацией */
    const handelClickButton = () =>{
        setShowBurgerMenu(!showBurgerMenu); // при каждом нажатии на кнопку изменяем значение showInfo на противоположное
    }
  return (
    <div className='auth_burger_navigation'>
        <button className='auth_burger_menu_icon'><AiOutlineMenu onClick={handelClickButton}/></button>
        <div className={``}>
            <ul>
                <li></li>
            </ul>

        </div>
    </div>
  )
};
export default AuthBurgerMenu;