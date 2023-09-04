/*Создан отдельный компонент для отображения дополнительной информации о товаре при нажатии на фото карточки товара */
import React from "react";
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react";

const Description = ({id, title, img, compound, price, onAddToCart, closeModalWindow}) =>{
    const handleAddToCart = () =>{
        onAddToCart({id, title, img, price}); // Передаем информацию о товаре в функцию добавления в корзину
    };
    return(
        <div className="background_description">
            <div className="description">
                <div>
                    <img className="description_item_image" 
                    src={img} alt={"Error:404 not found"}/>
                </div>
                <div>
                    <h4 className="title_product_cart">{title}</h4>
                    <div className="horizontal_line_product"></div>
                    <p>Compound:{compound}</p>
                    <div className="horizontal_line_product"></div>
                    <span>{price} $</span>
                    <button className="cart_button" onClick={handleAddToCart}>Add to cart</button>
                </div>
                <div className="close_description_block"><button onClick={closeModalWindow} className="close_description_button"><AiOutlineClose/></button></div>
            </div> {/* Отображаем описание при увеличении */}
        </div>
    );
}
export default Description;