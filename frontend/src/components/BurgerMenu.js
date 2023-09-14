import React from "react";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const BurgerMenu = ()=>{
    const [showBurgerMenu, setShowBurgerMenu] = useState(false); /* добавим состояние, которое будет определять, показывать
    ли блок с информацией */
    const handelClickButton = () =>{
        setShowBurgerMenu(!showBurgerMenu); // при каждом нажатии на кнопку изменяем значение showInfo на противоположное
    }
    return (
    <div className="burger_menu">
        <AiOutlineMenu onClick={handelClickButton} className="burger_menu_button" />
        <div className={`burger_navbar ${showBurgerMenu ? 'burger_show_info' : ''}`}>
            <ul className="burger_menu_categories">
                <li className="burger_menu_category">
                    <a href="#h">Home</a>
                </li>
                <li className="burger_menu_category">
                    <a href="#s">Sushi</a>
                </li>
                <li className="burger_menu_category">
                    <a href="#r">Rolls</a>
                </li>
                <li className="burger_menu_category">
                    <a href="#p">Poke</a>
                </li>
                <li className="burger_menu_category">
                    <a href="#s_1">Sets</a>
                </li>
                <li className="burger_menu_category">
                    <a href="#d" class="dropbtm">Drinks</a>
                </li>          
            </ul>
        </div>
    </div>
    );
}
export default BurgerMenu;