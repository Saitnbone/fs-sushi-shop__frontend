import React from "react";
import Description from "./Description";
import { useState } from "react";

// Компонент для карточки товара
    const ProductCart = ({id, title, compound, img, price, onAddToCart}) =>{
        const [showDetails, setShowDetails] = useState(false); // Состояние для показа дополнительной информации. Состояние для увеличения карточки
        const handleShowDetails = () => {
            setShowDetails(!showDetails);
        };
        const handleAddToCart = () =>{
            onAddToCart({id, title, img, price}); // Передаем информацию о товаре в функцию добавления в корзину
        };
    return(
        <div className={"grid_item${showDetails ? 'showDetails' : ''}"}>
            <img className="item_image" 
            src={img} alt={"Error:404 not found"} 
            onClick={handleShowDetails}/>
            <h3 className="title">{title}</h3>
            <p className="price_product_cart">Price: {price}$</p>
            <div className="horizontal_line_product"></div>
            <button className="cart_button" onClick={handleAddToCart}>Add to cart</button>
            {showDetails && <Description id={id} title={title} img={img} compound={compound} price={price} onAddToCart={onAddToCart} closeModalWindow={handleShowDetails}/>
            } {/* Отображаем описание при увеличении */}
        </div>
    )
}

export default ProductCart;