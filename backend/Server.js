require('dotenv').config() // Команда, чтобы сервер мог считывать информацию с файла 
const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.get('/api', (req, res)=>{
    res.json({
        message: "Message from backend Server.js"
    })
})