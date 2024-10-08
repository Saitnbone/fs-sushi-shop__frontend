import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'

const ContactBurgerMenu = () =>{
    const[showBurgerMenu, setShowBurgerMenu] = useState(false)
    const handelClickButton = () =>{
        setShowBurgerMenu(!showBurgerMenu)
    }
    return(
        <div className='basket_block_burger_nav'>
        <AiOutlineMenu onClick={handelClickButton} className='basket_block_burger_menu_icon'/>
        <div className={`basket_block_burger_menu ${showBurgerMenu ? "basket_block_burger_show_info": ""}`}>
            <ul>
                <li className=''><Link to={'/'}>Home Page</Link></li>
                <li className=''><Link to={'/'}>Menu</Link></li>
                <li className=''><Link to={'/registration'}>Authorization Page</Link></li>
                <li className=''><Link to={'/location'}>Location Page</Link></li>
            </ul>
        </div>
    </div>
    )
};

export default ContactBurgerMenu;