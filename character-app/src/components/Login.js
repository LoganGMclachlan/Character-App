import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username:'',
            password:''
        }
    }

    ChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }
    ChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    LoginHandler = event => {
        if(this.state.username != '' && this.state.password != ''){
            this.props.loginHandler(this.state.username,this.state.password)
        }
        else{
            alert("Enter a username and password")
        }
        event.preventDefault()
    }
        
    render() { 
        return (
        <div>
            <form onSubmit={this.LoginHandler}>
                <h2>Login to Account</h2>

                <label>Username:</label>
                <input type='text' 
                    value={this.state.username}
                    onChange={this.ChangeUsername}/><br/>

                <label>Password:</label>
                <input type='password' 
                    value={this.state.password}
                    onChange={this.ChangePassword}/><br/>
                    
                <button type='submit' className='red-button'>Login</button>
            </form>
        </div>
        );
    }
}
 
export default Login;