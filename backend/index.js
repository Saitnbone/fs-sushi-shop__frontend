require('dotenv').config() // Команда, чтобы сервер мог считывать информацию с файла .env
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const port = process.env.PORT || 3001
const cors = require('cors')
const router = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.get('/', (req, res)=>{
    res.status(200).json({message: 'Created by Creative fusion'})
})




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