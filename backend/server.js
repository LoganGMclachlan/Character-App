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

// executes a query then returns an error or message
function genericQuery(sql,message,res){
    db.query(sql, err => {
        if (err) return res.json(err)
        return res.json(message)
    })
}

// finds and returns all user data
app.get('/getUsers', (req, res) => {
    db.query("SELECT * FROM users", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post('/addUser', (req,res) => {
    const sql = `INSERT INTO users VALUES ('${req.body.id}','${req.body.username}','${req.body.email}','${req.body.password}')`
    const message = `New user "${req.body.username}" added to db`
    return genericQuery(sql,message,res)

})

app.post('/addCharacter', (req,res) =>{
    const message = `New character added to db`
    return genericQuery(req.body.sql,message,res)
})

app.post('/updateUsername', (req,res) => {
    const sql = `UPDATE users SET username='${req.body.username}' WHERE id='${req.body.id}'`
    const message = `Username updated to "${req.body.username}"`
    return genericQuery(sql,message,res)
})

app.post('/updateEmail', (req,res) => {
    const sql = `UPDATE users SET email='${req.body.email}' WHERE id='${req.body.id}'`
    const message = `Email updated to "${req.body.email}"`
    return genericQuery(sql,message,res)
})

app.post('/deleteUser', (req,res) => {
    const sql = `DELETE FROM users WHERE id='${req.body.id}'`
    const message = `User ${req.body.username} deleted from db`
    return genericQuery(sql,message,res)
})

app.post('/deleteCharacter', (req,res) => {
    const sql = `DELETE FROM characters WHERE id='${req.body.id}'`
    const message = `Character "${req.body.name}" deleted from db`
    return genericQuery(sql,message,res)
})

// finds and returns all character data
app.get('/getCharacters', (req, res) => {
    db.query("SELECT * FROM characters", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})