const sequelize = require('./database/dbConfig')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true}, 
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "User"}
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CartItems = sequelize.define('cart_items', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true}, 
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "User"}
})
