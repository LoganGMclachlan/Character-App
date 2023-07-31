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
import DBHandler from './DBHandler'

export default function App() {
  const [loginFormVisable, setLoginFormVisable] = useState(false)
  const [userFormVisable, setUserFormVisable] = useState(false)
  const [characterSelected, setCharacterSelected] = useState(null)

  const [currentUser, setCurrentUser] = useState(() => {
    const localValue = localStorage.getItem("CURRENT_USER")
    if(localValue === null) return null
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("CURRENT_USER", JSON.stringify(currentUser))
  }, [currentUser])
  
  const [userList, setUserList] = useState(() => {
    const localValue = localStorage.getItem("USERS")
    if(localValue === null) return []
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(userList))
  }, [userList])

  function register(username,email,password){
    // checks if the username and email entered dont already exist in list
    var userExists = false
    userList.forEach(user => {
      if(user.username === username || user.email === email){
        userExists = true
        alert("User with entered username or email already exists")
        return false
      }
    })

    // adds new user if details are unique
    if(!userExists){
      const newUser = {id: crypto.randomUUID(),
        username: username, email: email,
        password: hashPassword(password), characters: []}
      setUserList(currentUsers => {return[...currentUsers,newUser,]})
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
      setUserList(currentUsers => {
        return currentUsers.filter(user => user.id !== id)
      })
      setUserFormVisable(false)
      setCurrentUser(null)
      setCharacterSelected(null)
      alert("account deleted")
    }
  }

  function login(username,password){
    console.log(userList)
    let userFound = null
    userList.forEach(user => {
      if (user.username === username && hashPassword(password) === user.password){
          userFound = user
          return false
      }
    })

    if(userFound){
      setCurrentUser(userFound)
      setLoginFormVisable(false)
    }
    else{alert("incorrect username or password")}
  }

  function updateUsername(id,newUsername){
    // checks if username already exists in array somewere
    var nameExists = false
    userList.forEach(user => {
      if(user.username === newUsername && user.id !== id){
        nameExists = true
        alert("User with entered username already exists")
        return false
      }
    })

    // updates username if not found in list
    if(!nameExists){
      setUserList(userList.map(user => {
        if(user.id === id){
          return{...user,username:newUsername}
        }
        else{return user}
      }))
      setCurrentUser(user => {return{...user,username:newUsername}})
      alert("username updated successfuly")
    }
  }

  function updateEmail(id,newEmail){
    // checks if email already exists in array somewere
    var emailExists = false
    userList.forEach(user => {
      if(user.email === newEmail && user.id !== id){
        emailExists = true
        alert("User with entered email already exists")
        return false
      }
    })

    // updates email if not found in list
    if(!emailExists){
      setUserList(userList.map(user => {
        if(user.id === id){
          if(user.email === newEmail)
          return{...user,email:newEmail}
        }
        else{return user}
      }))
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

    let updatedUser = currentUser
    updatedUser.characters.push(newChar)
    setCurrentUser(updatedUser)

    setUserList(userList.map(user => {
      if(user.id === currentUser.id){
        return{...user,characters:updatedUser.characters}
      }
      else{return user}
    }))
  }

  function deleteCharacter(id){
    if(window.confirm("are you sure you want to delete this character?")){
      setUserList(currentUsers => {
        return currentUsers.map(user => {
          if(user.id === currentUser.id){
            user.characters = user.characters.filter(char => char.id !== id)
            setCurrentUser(user => {return{...user,characters:user.characters}})
            setCharacterSelected(null)
            alert("character deleted successfuly")
            return user
          }
          else{return user}
        })
      })
    }
  }

  return (
    <>
      <Header user={currentUser} showLogin={setLoginFormVisable}
      showUser={() => {setUserFormVisable(true);setCharacterSelected(null);}}/>

      {currentUser
        ? <CharacterList characters={currentUser.characters} addCharacter={addCharacter}
          selectChar={char => {setUserFormVisable(false);setCharacterSelected(char);}}/>
        : <div className='left-column'>
            <h3 className='left-column-title'>Characters</h3>
            <p><b onClick={() => {setLoginFormVisable(true)}}>login </b>
            to view and create characters.</p>
          </div>
      }

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