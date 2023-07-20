import { useState, useEffect } from 'react'
import './components/styles.css'
import Header from './components/Header'
import CharacterList from './components/CharacterList'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import UserDetails from './components/UserDetails'

export default function App() {
  const [loginFormVisable, setLoginFormVisable] = useState(false)
  const [userFormVisable, setUserFormVisable] = useState(false)

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
        password: password, characters: []}
      setUserList(currentUsers => {return[...currentUsers,newUser,]})
      setCurrentUser(newUser)
      setLoginFormVisable(false)
      alert("Account created successfuly")
    }
  }

  function deleteUser(id){
    if(window.confirm("are you sure you want to delete this account?")){
      setUserList(currentUsers => {
        return currentUsers.filter(user => user.id !== id)
      })
      setUserFormVisable(false)
      setCurrentUser(null)
      alert("account deleted")
    }
  }

  function login(username,password){
    let userFound = null
    userList.forEach(user => {
      if (user.username === username &&
        user.password === password){
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
  }

  return (
    <>
      <Header user={currentUser} showLogin={setLoginFormVisable}
      showUser={setUserFormVisable}/>

      {currentUser
        ? <CharacterList characters={currentUser.characters}/>
        : <div className='left-column'>
            <h3 className='left-column-title'>Characters</h3>
            <p><b onClick={() => {setLoginFormVisable(true)}}>login </b>
            to view and create characters.</p>
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