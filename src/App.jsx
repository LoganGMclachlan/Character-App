import { useState } from 'react'
import './components/styles.css'
import Header from './components/Header'
import CharacterList from './components/CharacterList'

export function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [userList, setUserList] = useState([])
  const [loginFormVisable, setLoginFormVisable] = useState(false)
  const [userFormVisable, setUserFormVisable] = useState(false)

  function addUser(username,email,password){
    var userExists = false
    userList.every(user => {
      if(user.username === username || user.email === email){
        userExists = true
        return false
      }
    })

    if(!userExists){
      setUserList(currentUsers => {
        return[
          ...currentUsers,
          {id: crypto.randomUUID(),
          username: username,
          email: email,
          password: password,
          characters: []},
        ]
      })
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
          return false
        }
    })
  }

  return (
    <>
      <Header user={currentUser}
      showLogin={() => {setLoginFormVisable(true)}}
      showUser={() => {setUserFormVisable(true)}}/>

      <CharacterList characters={currentUser.characters}/>

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