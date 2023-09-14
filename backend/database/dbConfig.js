const mysql = require('mysql2')
const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Название базы данных
    process.env.DB_USER, // Пользователь базы данных
    process.env.DB_PASSWORD, // Пароль от базы данных 
    {
        dialect: 'mysql',
        host: process.env.DB_HOST, // Хост базы данных
        // port: process.env.DB_PORT // Порт базы данных
    }
    
)

/* const connection = mysql.createConnection({
    host: 'localhost', // Адрес сервера MySQL
    user: 'saint_bone_creative_fusion', // Ваше имя пользователя MySQL
    passvord: '753abc', //
    database: 'ju_sushi_bd' //
});
*/

// Подключение к базе данных
/*
connection.connect((err)=>{
    if(err){
        console.error('Ошибка подключения к базе данных', err);
        return;
    } else {
        console.log('Подключение к базе данных успешно установлено.')
    }
    connection.end();
})
*/