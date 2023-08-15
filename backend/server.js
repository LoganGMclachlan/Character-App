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

// finds and returns all user data
app.get('/getUsers', (req, res) => {
    db.query("SELECT * FROM users", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// finds and returns all characters
app.get('/getCharacters', (req,res) => {
    db.query("SELECT * FROM characters", (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
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

app.post('/addUser', (req,res) => {
    const sql = `INSERT INTO users VALUES ('${req.body.id}','${req.body.username}','${req.body.email}','${req.body.password_hash}')`
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

app.post('/addAction', (req,res) => {
    const sql = `INSERT INTO actions VALUES ('${req.body.action.id}',`
                + `'${req.body.action.title}',${req.body.action.bonus_or_dc},`
                + `'${req.body.action.action_range}',${req.body.action.damage},`
                + `'${req.body.action.notes}','${req.body.charId}')`
    const message = `Action "${req.body.action.title}" added from db`
    return genericQuery(sql,message,res)
})

app.post('/deleteAction', (req,res) => {
    const sql = `DELETE FROM actions WHERE id='${req.body.id}'`
    const message = `Action deleted from db`
    return genericQuery(sql,message,res)
})

app.post('/addFeature', (req,res) => {
    const sql = `INSERT INTO features VALUES ('${req.body.feature.id}',`
                + `'${req.body.feature.title}',${req.body.feature.feature_description},`
                + `'${req.body.charId}')`
    const message = `Feature "${req.body.feature.title}" added from db`
    return genericQuery(sql,message,res)
})

app.post('/deleteFeature', (req,res) => {
    const sql = `DELETE FROM actions WHERE id='${req.body.id}'`
    const message = `Feature deleted from db`
    return genericQuery(sql,message,res)
})

// finds and returns all character data with given user id
app.post('/getCharacters', (req, res) => {
    return db.query(`SELECT * FROM characters WHERE user_id = '${req.body.userId}'`, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// finds the user with a given username
app.post('/findUser', (req,res) => {
    return db.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})