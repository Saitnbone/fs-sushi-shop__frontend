require('dotenv').config() // Команда, чтобы сервер мог считывать информацию с файла .env
const express = require('express')

const port = process.env.PORT || 3001

const app = express()

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

app.get('/api', (req, res)=>{
    res.json({
        message: "Message from backend server.js"
    })
})