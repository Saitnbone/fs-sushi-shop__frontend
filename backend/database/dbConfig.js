const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost', // Адрес сервера MySQL
    user: 'saint_bone_creative_fusion', // Ваше имя пользователя MySQL
    passvord: '753abc', //
    database: 'ju_sushi_bd' //
});

// Подключение к базе данных
connection.connect((err)=>{
    if(err){
        console.error('Ошибка подключения к базе данных', err);
        return;
    } else {
        console.log('Подключение к базе данных успешно установлено.')
    }
    connection.end();
})