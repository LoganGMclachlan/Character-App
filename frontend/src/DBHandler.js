import Character from './Character'

let instance

// singleton class with functions to interact with the database
class DBHandler{
    constructor() {
        if (instance) throw new Error("You can only create one instance!")
        instance = this
    }

    // posts some data and logs result
    genericPost(route,data){
        let error = null
        fetch(`http://localhost:8081/${route}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => {console.log(res);error=err;})
        // returns an error if one occured
        return error
    }

    // sends new user data to db
    addUser(newUser){
        //returns any errors
        return this.genericPost("addUser",newUser)
    }

    addCharacter(newChar){
        this.genericPost("addCharacter",newChar)
    }

    updatedUsername(user){
        return this.genericPost("updateUsername",user)
    }

    updatedEmail(user){
        return this.genericPost("updateEmail",user)
    }

    // deletes an user with matching id
    deleteUser(user){
        this.genericPost("deleteUser",user)
    }

    // deletes a character with matching id
    deleteCharacter(character){
        this.genericPost("deleteCharacter",character)
    }

    // gets character data for a given user id
    getCharacters(id){
        let characters = []
        fetch("http://localhost:8081/getCharacters",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId:id})
        }).then(res => res.json())
        .then(data => {
            data.forEach(char => {
                // TODO add all char details to list
                characters.push(new Character(char.name))
            })
        })
        .catch(err => console.log(err))        
        return characters
    }

    // gets the user with given username
    findUser(username){
        let userFound = null
        fetch("http://localhost:8081/findUser",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username:username})
        }).then(res => res.json())
        .then(data => {
            userFound = {id:data.id,username:data.username,email:data.email,password:data.password_hash,characters:[]}
        })
        .catch(err => console.log(err))        
        return userFound
    }

}

const db = Object.freeze(new DBHandler())
export default db