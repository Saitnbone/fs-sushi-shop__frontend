require('dotenv').config() // Команда, чтобы сервер мог считывать информацию с файла .env
const express = require('express')
const sequelize = require('./dbConfig')
const models = require('./models/models')
const port = process.env.PORT || 3001

const app = express()


const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}`)
        })
    } catch(err){
        console.log(err)
    }
}

start()



app.get('/api', (req, res)=>{
    res.json({
        message: "Message from backend server.js"
    })
})