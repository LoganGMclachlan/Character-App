const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const db = mysql.createConnection({
    host:       process.env.MYSQL_HOST,
    user:       process.env.MYSQL_USER,
    password:   process.env.MYSQL_PASSWORD,
    database:   process.env.MYSQL_DATABASE
})

app.get('/', (req,res) => {
    return res.json(`character app backend`)
})

app.listen(8081, () => {
    console.log("listening")
})

app.get('/getUsers', (req, res) => {
    db.query("SELECT * FROM users", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post('/addUser', (req,res) => {
    const sql = `INSERT INTO users VALUES ('${req.body.id}','${req.body.username}','${req.body.email}','${req.body.password}')`
    db.query(sql, (err) => {
        if (err) return res.json(err)
        return res.json(`New user "${req.body.username}" added to db`)
    })
})

app.get('/getCharacters', (req, res) => {
    db.query("SELECT * FROM characters", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})