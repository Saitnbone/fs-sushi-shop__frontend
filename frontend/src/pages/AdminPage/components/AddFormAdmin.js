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
          <div className="admin_form_element">
            <div>
              <label className="admin_lable">Title:</label>
            </div>
            <input type="text"></input>
          </div>
          <div className="admin_form_element">
            <div>
              <lable className="admin_lable">Category:</lable>
            </div>
            <input type="text"></input>
          </div>
          <div className="admin_form_element">
            <div>
               <lable className="admin_lable">Description</lable>
            </div>
            <textarea></textarea>
          </div>
          <div className="admin_form_element">
            <div>
              <lable className="admin_lable">Price</lable>
            </div>
            <input type="number"></input>
          </div>
          <div className="admin_form_element">
            <div>
              <lable className="admin_lable">Image:</lable>
            </div>
            <input type="file" accept="image/*"></input>
          </div>
          <button type="submit" className="admin_button_product">Add product</button>
        </form>
      </div>
    )
};

export default AddFormAdmin;