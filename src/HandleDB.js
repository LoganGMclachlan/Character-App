import mysql from 'mysql2'
import Character from './Character'
require('dotenv').config()

// singleton class with functions to interact with the database
export default class HandleDB{
    con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE})
    
    // gets user profile data from db and returns it
    getUsers(){
        let userList = []
        con.connect(err => {
        if (err){ throw err }else{
            con.query('SELECT * FROM users', (err, result) => {
            if (err){ throw err }else{
                result.forEach(row => {
                    userList.push({id:row.id,username:row.username,
                    email:row.email,password:row.password,characters:[]})
                })
            }
            })
        }
        })
        return userList
    }

    // gets character data and adds it to userlist
    getCharacters(userList){
        con.connect(err => {
        if (err){ throw err }else{
            con.query('SELECT * FROM characters', (err, result) => {
            if (err){ throw err }else{
                result.forEach(row => {
                    // finds the user the character belongs to
                    userList.map(user => {
                        if (user.id === row.userId){
                            newChar = new Character(row.name)
                            return{...user,characters:characters.push(newChar)}
                        }
                        else{return user}
                    })
                })
            }
            })
        }
        })
        return userList
    }
}

