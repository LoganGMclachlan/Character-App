import { PureComponent } from 'react';

import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import LoginRegister from './components/LoginRegister'


class App extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      loginVisible: false,
      currentUser: null,
      userList: new Array
    }
    this.state.userList.push({username:"Logan", password:"Password"})
    this.state.userList.push({username:"Jon", password:"Password2"})
  }

  RenderLoginComp = () => {
    this.setState({loginVisible: true})
  }
  RemoveLoginComp = () => {
    this.setState({loginVisible: false})
  }

  Login = (username,password) => {
    var logIn = null// will store user obj to be logged in

    this.state.userList.forEach(e => {
      if(e.username == username && e.password == password){
        logIn = e
      }
    });

    if (logIn){
      this.setState({currentUser: logIn})
      
      this.RemoveLoginComp()
      alert(`Logged in as ${logIn.username}`)
    }
    else{
      alert("Incorrect Username or Password")
    }
  }

  Register = (username,password) => {
    var userExists = false
    
    this.state.userList.forEach(e => {
      if(e.username == username){
        userExists = true
      }
    });

    if (userExists == false){
      var newUser = {username:username,password:password,characters:new Array}
      this.setState({currentUser: newUser})
      this.state.userList.push(newUser)

      this.RemoveLoginComp()
      alert(`Registered new account`)
    }
  }

  render() { 
  return (
    <div>
      <Header user={this.state.currentUser} showLogin={this.RenderLoginComp}/>
      <LeftColumn user={this.state.currentUser}/>
      {this.state.loginVisible &&
        (<LoginRegister
          xHandler={this.RemoveLoginComp}
          loginHandler={this.Login}
          registerHandler={this.Register}/>)
      }
    </div>
    )
  }
}

export default App;
