import { useState, useEffect } from 'react'
import hasher from 'crypto'
import './components/styles.css'
import Header from './components/Header'
import CharacterList from './components/CharacterList'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import CharacterForm from './components/CharacterForm'
import UserDetails from './components/UserDetails'
import Character from './Character'
import db from './DBHandler'

export default function App() {
  const [loginFormVisable, setLoginFormVisable] = useState(false)
  const [userFormVisable, setUserFormVisable] = useState(false)

  // selected character is fetched form local storage
  const [characterSelected, setCharacterSelected] = useState(() => {
    const localValue = localStorage.getItem("CURRENT_CHAR")
    if(localValue === null) return null
    return JSON.parse(localValue)
  })
  // if selected character is changed, save it to local storage
  useEffect(() => {
    localStorage.setItem("CURRENT_CHAR", JSON.stringify(characterSelected))
  }, [characterSelected])

  
  // current user is fetched form local storage
  const [currentUser, setCurrentUser] = useState(() => {
    const localValue = localStorage.getItem("CURRENT_USER")
    if(localValue === null) return null
    return JSON.parse(localValue)
  })
  // if current user is changed, save it to local storage
  useEffect(() => {
    localStorage.setItem("CURRENT_USER", JSON.stringify(currentUser))
  }, [currentUser])


  function register(username,email,password){
    // creates user object
    const newUser = {id: crypto.randomUUID(),
      username: username, email: email,
      password: hashPassword(password), characters: []
    }
    // trys to add user to database
    const error = db.addUser(newUser)
    // if an error is returned alert the user
    if(error){
      alert("User with entered name or email already exists")
    }
    else{
      // sets current user and sends success message
      setCurrentUser(newUser)
      setLoginFormVisable(false)
      alert("Account created successfuly")
    }
  }

  // takes in a password and returnd a hashed version of it
  function hashPassword(password){
    return hasher.createHash('sha256').update(password).digest('hex')
  }

  function deleteUser(id){
    // makes user confirm before deleting an account
    if(window.confirm("are you sure you want to delete this account?")){
      db.deleteUser({id:id,username:currentUser.username})
      setCurrentUser(null)
      setCharacterSelected(null)
      setUserFormVisable(false)
      alert("account deleted")
    }
  }

  // logs a user into their account
  function login(username,password){
    // trys to find a user with entered username 
    let userFound = db.findUser(username)
    // checks if user was found then compares passwords
    if(userFound !== null && hashPassword(password) === userFound.password){
      // fetches any characters that user might have
      userFound.characters = db.getCharacters(userFound.id)
      setCurrentUser(userFound)
      setLoginFormVisable(false)
    }
    else{alert("incorrect username or password")}
  }

  // changes username of a user with given id
  function updateUsername(id,newUsername){
    // trys to update username
    const error = db.updatedUsernameUser(id,newUsername)
    // if an error is returned alert the user
    if(error){
      alert("User with entered name already exists")
    }
    else{
      // updates current user
      setCurrentUser(user => {return{...user,username:newUsername}})
      alert("username updated successfuly")
    }
  }

  function updateEmail(id,newEmail){
    // trys to update email
    const error = db.updatedEmail(id,newEmail)
    // if an error is returned alert the user
    if(error){
      alert("User with entered email already exists")
    }
    else{
      // updates current user
      setCurrentUser(user => {return{...user,email:newEmail}})
      alert("email updated successfuly")
    }
  }

  // logs user out of their account
  function logout(){
    setCurrentUser(null)
    setUserFormVisable(false)
    setCharacterSelected(null)
  }

  // creates a new character
  function addCharacter(charName){
    // creates character with entered name
    const newChar = new Character(charName)
    // adds character to current user list
    setCurrentUser(currentUser.characters.push(newChar))
    // adds character to database
    db.addCharacter({sql:newChar.getInsertQuery(currentUser.id)})
  }

  // removes a character from a users list
  function deleteCharacter(id){
    // confirms user wants to delete selected character
    if(window.confirm("are you sure you want to delete this character?")){
      setCurrentUser(user => {return{...user,characters:characters.filter(char => {if(char.id !== id)return char})}})
      db.deleteCharacter(id)
      setCharacterSelected(null)
    }
  }

  // updates a character with new data
  function updateCharacter(updatedCharacter){
      // deletes old character
      db.deleteCharacter(characterSelected.id)
      // adds new character with new info
      db.addCharacter(updatedCharacter.getInsertQuery(currentUser.id))
  }

  return (
    <>
      <Header user={currentUser} showLogin={setLoginFormVisable}
      showUser={() => {setUserFormVisable(true);setCharacterSelected(null);}}/>

      <div className='left-column'>
        <h3 className='left-column-title'>Characters</h3>
        {currentUser
          ? <CharacterList characters={currentUser.characters} addCharacter={addCharacter}
            selectChar={char => {setUserFormVisable(false);setCharacterSelected(char);}}/>
          : <p><b onClick={() => {setLoginFormVisable(true)}}>login </b>
            to view and create characters.</p>
        }
      </div>

      {characterSelected &&
        <div className='character-form'>
          <button className='x-btn' onClick={() => {setCharacterSelected(null)}}>X</button>
          <CharacterForm character={characterSelected}/>
        </div>
      }

      {loginFormVisable && (
          <div className='small-form'>
            <button className='x-btn' onClick={() => {setLoginFormVisable(false)}}>X</button>
            <LoginForm login={login}/>
            <RegisterForm register={register}/>
          </div>)
      }
      
      {userFormVisable && (
          <div className='small-form'>
            <button className='x-btn'onClick={() => {setUserFormVisable(false)}}>X</button>
            <UserDetails updateUsername={updateUsername} updateEmail={updateEmail}
            logout={logout} deleteUser={deleteUser} user={currentUser}/>
          </div>)
      }
    </>
  )
}