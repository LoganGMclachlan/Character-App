import mysql from 'mysql2'
import Character from './Character'
import SQL_Details from './SQL_Details'

let instance

// singleton class with functions to interact with the database
class DBHandler{
    constructor() {
        if (instance) throw new Error("You can only create one instance!")
        this.con = mysql.createConnection({
            host:       SQL_Details.MYSQL_HOST,
            user:       SQL_Details.MYSQL_USER,
            password:   SQL_Details.MYSQL_PASSWORD,
            database:   SQL_Details.MYSQL_DATABASE})
        instance = this
    }
    
    // gets user profile data from db and returns it
    getUsers(){
        let userList = []
        this.con.connect(err => {
            if (err) throw err
            this.con.query('SELECT * FROM users', (err, result) => {
                if (err) throw err
                result.forEach(row => {
                    userList.push({id:row.id,username:row.username,
                    email:row.email,password:row.password_hash,characters:[]})
                })
            })
        })
        return userList
    }

    // gets character data and adds it to userlist
    getCharacters(userList){
        this.con.connect(err => {
            if (err) throw err
            this.con.query('SELECT * FROM characters', (err, result) => {
                if (err) throw err
                result.forEach(row => {
                    // finds the user the character belongs to
                    userList.map(user => {
                        if (user.id === row.userId){
                            newChar = new Character(row.name)
                            return{...user,characters:characters.push(newChar)}
                        }else{return user}
                    })
                })
            })
        })
        return userList
    }


}

const db = Object.freeze(new DBHandler())
export default db