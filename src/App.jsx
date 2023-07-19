import { useState } from 'react'
import './components/styles.css'
import Header from './components/Header'
import CharacterList from './components/CharacterList'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [userList, setUserList] = useState([])
  const [loginFormVisable, setLoginFormVisable] = useState(false)
  const [userFormVisable, setUserFormVisable] = useState(false)

  function addUser(username,email,password){
    var userExists = false
    userList.every(user => {
      if(user.username === username || user.email === email){
        userExists = true
        alert("User with entered username or email already exists")
        return false
      }
    })

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

  return (
    <>
      <Header user={currentUser} showLogin={setLoginFormVisable}
      showUser={setUserFormVisable}/>

      {currentUser
        ? <CharacterList characters={currentUser.characters}/>
        : <div className='left-column'>
            <h3 className='left-column-title'>Characters</h3>
            <p><b onClick={() => {setLoginFormVisable(true)}}>login</b> to view and create characters</p>
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
            //editUsername={this.EditUsername}
            //editEmail={this.EditEmail}
            logout={() => {setCurrentUser(null)}}
            deleteUser={deleteUser}
            user={currentUser}/>
          </div>
        )
      }
    </>
  )
}