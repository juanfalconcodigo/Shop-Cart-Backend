const mysql = require('mysql2/promise');

const connection = async() => {
    const pool = await mysql.createPool({
        host: process.env.HOST_DATABASE,
        user: process.env.USER_DATABASE,
        database: process.env.NAME_DATABASE,
        password: process.env.PASSWORD_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        ssl: {
            rejectUnauthorized: false
        }
    });
    return pool;
}

module.exports = {
    connection
}