import { useState } from 'react';

import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import LoginRegister from './components/LoginRegister'


function App() {
  const [loginVisible, setVisible] = useState(false);
  const userList = []
  userList.add({username:"Logan", password:"Password"})
  userList.add({username:"Jon", password:"Password2"})
  var currentUser = null
  
  const renderLoginComp = () => {
    setVisible(true);
  }

  const removeLoginComp = () => {
    setVisible(false);
  }

  const login = (username,password) => {
    userList.forEach(e => {
      if(e.username == username && e.password == password){
        currentUser = e
        alert(`Logged in as ${username}`)
      }
    });
  }

  const register = (username,password) => {
    var userExists = false
    while(!userExists){
      userList.forEach(e => {
        if(e.username == username){
          userExists = true
        }
      });
      currentUser = {username:username,password:password} 
      userList.add(currentUser)
    }
  }

  return (
    <div>
      <Header user={user2} showLogin={renderLoginComp}/>
      <LeftColumn user={user2}/>
      {loginVisible &&
        (<LoginRegister
          xHandler={removeLoginComp}
          loginHandler={login}
          registerHandler={register}/>)
      }
    </div>
  );
}

export default App;
