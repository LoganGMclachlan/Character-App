import Character from './Character'

let instance

// singleton class with functions to interact with the database
class DBHandler{
    constructor() {
        if (instance) throw new Error("You can only create one instance!")
        instance = this
    }
    
    // gets user profile data from db and returns it
    getUsers(){
        let userList = []
        fetch("http://localhost:8081/getUsers")
        .then(res => res.json())
        .then(data => 
            data.forEach(row => {
                userList.push({id:row.id,username:row.username,
                email:row.email,password:row.password_hash,characters:[]})
            }))
        .catch(err => console.log(err))
        return userList
    }

    // gets character data and adds it to userlist
    getCharacters(userList){
        fetch("http://localhost:8081/getCharacters")
        .then(res => res.json())
        .then(data => {
            data.forEach(row => {
                // finds the user each character belongs to
                userList.map(user => {
                    if (user.id === row.userId){
                        newChar = new Character(row.name)
                        return{...user,characters:characters.push(newChar)}
                    }else{return user}
                })
            })
        })
        .catch(err => console.log(err))        
        return userList
    }


}

const db = Object.freeze(new DBHandler())
export default db