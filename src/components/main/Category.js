import React from "react";
import ProductCart from "./ProductCart";

// Компонент для категории товаров
const Category  = ({categoryName, products, onAddToCart}) => {
    return(
        <div>
            <h2 className="title">{categoryName}</h2>
            <div className="grid_menu">
                {products.map((product)=>(<ProductCart 
                key={product.id}
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                compound={product.compound}
                onAddToCart={onAddToCart}
            />))}
            </div>
        </div>
    )
}

export default Category;
