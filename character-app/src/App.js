import { Component } from 'react'
import Header from './components/Header'
import LeftColumn from './components/LeftColumn'
import Register from './components/Register'
import Login from './components/Login'
import UserDetails from './components/UserDetails'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loginVisible: false,
      userDetailsVisable: false,
      currentUser: null,
      userList: new Array
    }
    this.state.userList.push({username:"Logan",email:'logan.g.mclachlan@gmail.com',password:"Password"})
    this.state.userList.push({username:"f",email:'test@email.com',password:"f"})
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
      if(e.username === username && e.password === password){
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

  Register = (username,email,password) => {
    var userExists = false
    
    this.state.userList.forEach(e => {
      if(e.username === username){
        userExists = true
      }
    });

    if (userExists === false){
      var newUser = {username:username,email:email,password:password,characters:new Array}
      this.setState({currentUser: newUser})
      this.state.userList.push(newUser)

      this.RemoveLoginComp()
      alert(`Registered new account`)
    }
  }

  EditUsername = newUsername => {
    var counter = -1
    var updatedList
    this.state.userList.forEach(e => {
      counter++
      if (e.username === this.state.currentUser.username){
        updatedList = this.state.userList
        updatedList[counter].username = newUsername
        this.setState({userList:updatedList})
        this.setState({currentUser:updatedList[counter]})
      }
    });
  }

  EditEmail = newEmail => {
    var counter = -1
    var updatedList
    this.state.userList.forEach(e => {
      counter++
      if (e.email === this.state.currentUser.email){
        updatedList = this.state.userList
        updatedList[counter].email = newEmail
        this.setState({userList:updatedList})
        this.setState({currentUser:updatedList[counter]})
      }
    });
  }

  Logout = () => {
    this.setState({currentUser:null})
    this.RemoveUserComp()
  }

  DeleteAccount = user => {
    var updatedList = new Array
    this.state.userList.forEach(e => {
      if (e !== user){
        updatedList.push(e)
        this.setState({userList:updatedList})
        this.Logout()
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
        (
          <div className='small-form'>
            <button className='x-button' onClick={this.RemoveLoginComp}>X</button>
            <Login loginHandler={this.Login}/>
            <Register registerHandler={this.Register}/>
          </div>
        )
      }

      {this.state.userDetailsVisable &&
        (
          <div className='small-form'>
            <button className='x-button' onClick={this.RemoveUserComp}>X</button>
            <UserDetails
            editUsername={this.EditUsername}
            editEmail={this.EditEmail}
            logout={this.Logout}
            deleteAccount={this.DeleteAccount}
            user={this.state.currentUser}/>
          </div>
        )
      }
    </div>
    )
  }
}

export default App;
