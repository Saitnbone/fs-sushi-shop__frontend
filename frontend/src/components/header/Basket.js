import React from "react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CloseItemButton from "../Delete_item_button";
import PlusItemButton from "../Plus_button_item";
import MinusItemButton from "../Minus_button_item";



// Компонент Корзина 
const Basket = ({cartItems, totalPrice})=>{
  const [showInfo, setShowInfo] = useState(false) // добавим состояние, которое будет определять, показывать ли блок с информацией
  const handelClickButton = () =>{
    setShowInfo(!showInfo)}; // при каждом нажатии на кнопку изменяем значение showInfo на противоположное
  return (
    <div>
      <HiOutlineShoppingBag onClick={handelClickButton} className="button_basket" />
      <div className={`cart_shop ${showInfo ? 'cart-show' : ''}`}>
          <h2 className="title">Shopping Cart</h2>
          <div className="block_with_items">
            {cartItems.length === 0 ?(<p className="cart_text">Your cart empty</p>):(
              <ul>
                {cartItems.map((item)=>(
                <li key={item.id} className="cart_position">
                  <div className="horizontal_line_cart"></div>
                  <div className="titles_and_prices">
                    <img className="cart_item_image" src={item.img} alt={"Error:404 not found"}/>
                    <div className="brief_information">
                      <p className="title_items">{item.title}</p> 
                      <span className="price_items">{item.price} $</span>  
                    </div> 
                    <div className="add_del_el">
                      <MinusItemButton/>
                      <span className="vertical_line_cart"></span>
                      <PlusItemButton/>
                    </div>
                    <div className="quantity">
                        <span>x {item.quantity}</span>
                    </div>
                    <div className="close_button">
                      <CloseItemButton />
                    </div>
                  </div>
                  </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="horizontal_line_product"></div>
          <div className="total_price">
            {totalPrice.length === 0 ?(<p>Total Price: 0$</p>):(
              <p>Total Price: {totalPrice}$</p>
            )} {/* Отображаем общую сумму заказа */}
          </div>
          <button className="cart_button_1">Go to Pay</button>
      </div>
    </div>
  )
}
export default Basket;
