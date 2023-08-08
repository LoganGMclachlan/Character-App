import { useState, useEffect, lazy, Suspense } from 'react'
import hasher from 'crypto'
import './components/styles.css'

import Header from './components/Header'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
const CharacterList = lazy(() => import('./components/CharacterList'))
const CharacterForm = lazy(() => import('./components/CharacterForm'))
const UserDetails = lazy(() => import('./components/UserDetails'))

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
    const newUser = {id: crypto.randomUUID(),
      username: username, email: email,
      password_hash: hashPassword(password), characters: []
    }
    // trys to add user to database
    const error = db.addUser(newUser)
    if(error){
      alert("User with entered name or email already exists")
    }
    else{
      setCurrentUser(newUser)
      setLoginFormVisable(false)
      alert("Account created successfuly")
    }
  }

  function hashPassword(password){
    return hasher.createHash('sha256').update(password).digest('hex')
  }

  function deleteUser(id){
    if(window.confirm("are you sure you want to delete this account?")){
      db.deleteUser({id:id,username:currentUser.username})
      setCurrentUser(null)
      setCharacterSelected(null)
      setUserFormVisable(false)
      alert("account deleted")
    }
  }

  async function login(username,password){
    // trys to find a user with entered username 
    let userFound = await db.findUser(username)
    if(userFound !== undefined && hashPassword(password) === userFound.password_hash){
      // fetches any characters that user might have
      userFound.characters = await db.getCharacters(userFound.id)
      setCurrentUser(userFound)
      setLoginFormVisable(false)
    }
    else{
      alert("incorrect username or password")
  }
  }

  async function updateUsername(id,newUsername){
    // trys to update username
    const error = await db.updatedUsername({id:id,username:newUsername})
    if(error){
      alert("User with entered name already exists")
    }
    else{
      setCurrentUser(user => {return{...user,username:newUsername}})
      alert("username updated successfuly")
    }
  }

  async function updateEmail(id,newEmail){
    // trys to update email
    const error = await db.updatedEmail({id:id,email:newEmail})
    if(error){
      alert("User with entered email already exists")
    }
    else{
      setCurrentUser(user => {return{...user,email:newEmail}})
      alert("email updated successfuly")
    }
  }

  function logout(){
    setCurrentUser(null)
    setUserFormVisable(false)
    setCharacterSelected(null)
  }

  function addCharacter(charName){
    const newChar = new Character(charName)
    setCurrentUser(currentUser.characters.push(newChar))
    db.addCharacter({sql:newChar.getInsertQuery(currentUser.id)})
  }

  function deleteCharacter(id){
    if(window.confirm("are you sure you want to delete this character?")){
      setCurrentUser(user => {return{...user,characters:characters.filter(char => {if(char.id !== id)return char})}})
      db.deleteCharacter({id:id})
      setCharacterSelected(null)
    }
  }

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
          ? <Suspense fallback={<p>Loading Characters...</p>}>
              <CharacterList characters={currentUser.characters} addCharacter={addCharacter}
              selectChar={char => {setUserFormVisable(false);setCharacterSelected(char);}}/>
            </Suspense>
          : <p><b onClick={() => {setLoginFormVisable(true)}}>login </b>
            to view and create characters.</p>
        }
      </div>

      {characterSelected &&
        <div className='character-form'>
          <button className='x-btn' onClick={() => {setCharacterSelected(null)}}>X</button>
          <Suspense fallback={<p>Loading Character...</p>}><CharacterForm character={characterSelected}/></Suspense>
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
            <Suspense fallback={<p>Loading User Info...</p>}>
              <UserDetails updateUsername={updateUsername} updateEmail={updateEmail}
              logout={logout} deleteUser={deleteUser} user={currentUser}/>
            </Suspense>
          </div>)
      }
    </>
  )
}