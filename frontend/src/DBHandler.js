let instance

// singleton class with functions to interact with the database
class DBHandler{
    constructor() {
        if (instance) throw new Error("You can only create one instance!")
        instance = this
    }

    // posts some data and logs result
    async genericPost(route,info){
        return await fetch(`http://localhost:8081/${route}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(info)
        }).then(data => data.json())
        .then(data => {console.log(data);return null})
        .catch(err => {console.log(err);return err})
    }

    // sends new user data to db
    async addUser(newUser){
        //returns any errors
        return await this.genericPost("addUser",newUser)
    }

    addCharacter(newChar){
        this.genericPost("addCharacter",newChar)
    }

    async updatedUsername(user){
        return await this.genericPost("updateUsername",user)
    }

    async updatedEmail(user){
        return await this.genericPost("updateEmail",user)
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
    async getCharacters(id){
        let characters = []
        return await fetch("http://localhost:8081/getCharacters",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId:id})
        }).then(res => res.json())
        .then(data => {
            data.forEach(char => characters.push(char))
            return characters
        })
        .catch(err => console.log(err))   
    }

    // gets the user with given username
    async findUser(username){
        return await fetch("http://localhost:8081/findUser",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username:username})
        }).then(res => res.json())
        .then(data => {console.log(data[0]);return data[0]})
        .catch(err => {console.log(err);return undefined})
    }
}

const db = Object.freeze(new DBHandler())
export default db