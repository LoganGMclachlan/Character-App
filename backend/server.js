const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:       process.env.MYSQL_HOST,
    user:       process.env.MYSQL_USER,
    password:   process.env.MYSQL_PASSWORD,
    database:   process.env.MYSQL_DATABASE
})

app.get('/', (re,res) => {
    return res.json(`character app backend
    /getUsers to get user data
    /getCharacters to get character data`)
})

app.listen(8081, () => {
    console.log("listening")
})

app.get('/getUsers', (re, res) => {
    db.query("SELECT * FROM users", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get('/getCharacters', (re, res) => {
    db.query("SELECT * FROM characters", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})