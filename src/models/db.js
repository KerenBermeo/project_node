require('dotenv').config();

const mysql = require('mysql2');
require('dotenv').config(); // Carga las variables de entorno desde .env

// Crear conexión con MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL.');
});

module.exports = connection;
