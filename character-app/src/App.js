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
    this.state.userList.forEach(e => {
      if(e.username == username && e.password == password){
        this.setState({currentUser: e})
        this.RemoveLoginComp()
        alert(`Logged in as ${username}`)
      }
    });
  }

  Register = (username,password) => {
    var userExists = false
    while(!userExists){
      this.state.userList.forEach(e => {
        if(e.username == username){
          userExists = true
        }
      });
      this.setState({currentUser: {username:username,password:password}})
      this.state.userList.push(this.state.currentUser)
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
