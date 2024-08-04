/*
-----------------------------------------------------------------------------------------------------------------------------------
| Данный файл используется для настройки таблиц, которые будут храниться в базе данных.
-----------------------------------------------------------------------------------------------------------------------------------
*/ 


const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', { // Модель пользователя
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false}, 
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const CartUser = sequelize.define('cart_user', { //Модель для корзины
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CartProduct = sequelize.define('cart_product', { // Модель для элемента корзины
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const Products = sequelize.define('products', { // Модель для товара 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false}, 
    categoryId: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
}) 

const Category = sequelize.define('category_products', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    name:{type: DataTypes.STRING, unique: true, allowNull: false}
})

User.hasOne(CartUser) // указываем связь между корзиной и пользователем 
CartUser.belongsTo(User)// Данной строкой сообщаем что корзина принадлежит пользователю

CartUser.hasMany(CartProduct) // указываем, что корзина пользователя имеет много предметов 
CartProduct.belongsTo(CartUser)

CartProduct.hasOne(Products) 
Products.belongsTo(CartProduct)

Products.hasOne(Category)
Category.belongsTo(Products)

Category.hasMany(Products)
Products.belongsTo(Category)


module.exports= {
    User, 
    CartUser, 
    CartProduct, 
    Products, 
    Category
}