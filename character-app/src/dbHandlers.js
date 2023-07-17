var mysql = require('mysql2')
var dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getUsers(){
    const [result] = await pool.query("SELECT * FROM users")
    return result
}

console.log(getUsers())