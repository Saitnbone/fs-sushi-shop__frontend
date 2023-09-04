import React from "react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const AutorizationForm=()=>{
  const [showInfo, setShowInfo] = useState(false) // состояние, которое будет определять, показывать ли блок с информацией
  const handelClickButton = () =>{
    setShowInfo(!showInfo) // при каждом нажатии на кнопку изменяем значение showInfo на противоположное
  }
  return(
  <div>
    <AiOutlineUser onClick={handelClickButton} className="button_basket" />
    <div className={`cart_shop ${showInfo ? 'cart-show' : ''}`}>
      <h2 className="title">Autorization</h2>
      <div className="autorization_form">
        <form>
          <div>
            <div className="autorization_name">
              <input type="text" placeholder="Name"/>
            </div>
            <div className="autorization_password">
              <input type="text" placeholder="Password"/>
            </div>
          </div>
        </form>
        <div className="autorization_button" >
          <button type="submit">Entry</button>
        </div>
        <div className="horizontal_line_product"></div>
        <div className="autorization_text"><p>If you don't have an account, then register to get access to additional features</p></div>
      </div>
    </div>
  </div>)
}

export default AutorizationForm;
