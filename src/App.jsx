import { useState } from 'react'
import './components/styles.css'
import Header from './components/Header'
import CharacterList from './components/CharacterList'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import UserDetails from './components/UserDetails'

export default function App() {
  const testUsers = [
    {id: crypto.randomUUID(),
    username: 'test1',
    email: 'test1@email.com',
    password: 'pass1',
    characters: []},
    {id: crypto.randomUUID(),
      username: 'test2',
      email: 'test2@email.com',
      password: 'pass2',
      characters: []}]

  const [currentUser, setCurrentUser] = useState(null)
  const [userList, setUserList] = useState(testUsers)
  const [loginFormVisable, setLoginFormVisable] = useState(false)
  const [userFormVisable, setUserFormVisable] = useState(false)

  function addUser(username,email,password){
    // checks if the username and email entered dont already exist in list
    var userExists = false
    userList.every(user => {
      if(user.username === username || user.email === email){
        userExists = true
        alert("User with entered username or email already exists")
        return false
      }
    })

    // adds new user if details are unique
    if(!userExists){
      var newUser = {id: crypto.randomUUID(),
        username: username,
        email: email,
        password: password,
        characters: []}
      setUserList(currentUsers => {
        return[
          ...currentUsers,
          newUser,
        ]
      })

      setCurrentUser(newUser)
      setLoginFormVisable(false)
      alert("Account created successfuly")
    }
  }

  function deleteUser(id){
    setUserList(currentUsers => {
      return currentUsers.filter(user => user.id !== id)
    })
  }

  function login(username,password){
    userList.every(user => {
      if (user.username === username &&
        user.password === password){
          setCurrentUser(user)
          setLoginFormVisable(false)
          return false
        }
    })
  }

  function updateUsername(id,newUsername){
    // checks if username already exists in array somewere
    var nameExists = false
    userList.every(user => {
      if(user.username === newUsername){
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
    userList.every(user => {
      if(user.email === newEmail){
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

  return (
    <>
      <Header user={currentUser} showLogin={setLoginFormVisable}
      showUser={setUserFormVisable}/>

      {currentUser
        ? <CharacterList characters={currentUser.characters}/>
        : <div className='left-column'>
            <h3 className='left-column-title'>Characters</h3>
            <p><b onClick={() => {setLoginFormVisable(true)}}>login</b>
            to view and create characters.</p>
          </div>
      }

      {loginFormVisable &&
        (
          <div className='small-form'>
            <button className='x-button' onClick={() => {setLoginFormVisable(false)}}>X</button>
            <LoginForm login={login}/>
            <RegisterForm register={addUser}/>
          </div>
        )
      }
      {userFormVisable &&
        (
          <div className='small-form'>
            <button className='x-button' onClick={() => {setUserFormVisable(false)}}>X</button>
            <UserDetails
            updateUsername={updateUsername}
            updateEmail={updateEmail}
            logout={() => {setCurrentUser(null)}}
            deleteUser={deleteUser}
            user={currentUser}/>
          </div>
        )
      }
    </>
  )
}