import React, { Component } from 'react';
import './App.css';

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            username:'',
            password:'',
            confirmPass:''
        }
    }

    ChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }
    ChangePassword = (event) => {
        this.setState({password: event.target.value})
    }
    ChangeConfirmPass = (event) => {
        this.setState({confirmPass: event.target.value})
    }

    RegisterHandler = event => {
        if(this.state.username != '' && this.state.password != ''){
            if(this.state.password === this.state.confirmPass){
                this.props.registerHandler(this.state.username,this.state.password)
            }
            else{
                alert("Passwords do not match")
            }
        }
        else{
            alert("Enter a username and password")
        }
        event.preventDefault()
    }
        
    render() { 
        return (
        <div>
            <form onSubmit={this.RegisterHandler}>
            <h2>Register new Account</h2>
            
                <label>Username:</label>
                <input type='text' 
                    value={this.state.username}
                    onChange={this.ChangeUsername}/><br/>

                <label>Password:</label>
                <input type='password' 
                    value={this.state.password}
                    onChange={this.ChangePassword}/><br/>

                <label>Confirm Password:</label>
                <input type='password' 
                    value={this.state.confirmPass}
                    onChange={this.ChangeConfirmPass}/><br/>

                <button type='submit' className='red-button'>Register</button>
            </form>
        </div>
        );
    }
}
 
export default Register;