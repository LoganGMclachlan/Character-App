import { Component } from 'react';

import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import LoginRegister from './components/LoginRegister'
import UserDetails from './components/UserDetails';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loginVisible: false,
      userDetailsVisable: false,
      currentUser: {username:"f", password:"f"},
      userList: new Array
    }
    this.state.userList.push({username:"Logan", password:"Password"})
    this.state.userList.push({username:"Jon", password:"Password2"})
    this.state.userList.push({username:"f", password:"f"})
  }

  RenderLoginComp = () => {
    this.setState({loginVisible: true})
  }
  RemoveLoginComp = () => {
    this.setState({loginVisible: false})
  }

  RenderUserComp = () => {
    this.setState({userDetailsVisable: true})
  }
  RemoveUserComp = () => {
    this.setState({userDetailsVisable: false})
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

  EditUsername = (newUsername) => {
    this.state.userList.forEach(e => {
      if (e.username == this.currentUser){
        e.username = newUsername
        this.setState({currentUser: e})

      }
    });
  }

  render() { 
  return (
    <div>
      <Header
      user={this.state.currentUser}
      showLogin={this.RenderLoginComp}
      showUser={this.RenderUserComp}/>
      <LeftColumn user={this.state.currentUser}/>
      {this.state.loginVisible &&
        (<LoginRegister
          xHandler={this.RemoveLoginComp}
          loginHandler={this.Login}
          registerHandler={this.Register}/>)
      }
      {this.state.userDetailsVisable &&
        (<UserDetails
          xHandler={this.RemoveUserComp}
          editUsernameHandler={this.EditUsername}
          user={this.state.currentUser}/>)
      }
    </div>
    )
  }
}

export default App;
