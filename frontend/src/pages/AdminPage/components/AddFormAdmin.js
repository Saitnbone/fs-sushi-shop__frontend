/* 
____________________________________________________________________________________________________________________________

This component represents a form for adding products by a user with the administrator role. Adding among the main ones
characteristics, you can add the product name, product description, product category and price.

Данный компонент представляет форму для добавления товаров пользователем с ролью администратора. Добавление среди основных
характеристик можно добавить название товара, описание товара, категорию товара и цену.
____________________________________________________________________________________________________________________________

*/


import React from "react";
import { useState } from "react";

const AddFormAdmin = () => {
    const addNewProduct = (e) =>{ 
        e.preventDefault();
    }
    return (
      <div className="admin_form_product_store">
        <h2 className="title">Add new product to the store</h2>
        <form onSubmit={addNewProduct}>
          <div>
            <label>Title:</label>
            <input type="text"></input>
          </div>
          <div>
            <lable>Category:</lable>
            <input type="text"></input>
          </div>
          <div>
            <lable>Description</lable>
            <textarea></textarea>
          </div>
          <div>
            <lable>Price</lable>
            <input type="number"></input>
          </div>
          <div>
            <lable>Image</lable>
            <input type="file" accept="image/*"></input>
          </div>

        </form>
      </div>
    )
};

export default AddFormAdmin;