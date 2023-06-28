import React, { Component } from 'react';
import './App.css';

class LoginRegister extends Component {
    constructor(props){
        super(props)

        this.state = {
            lUsername:'',
            lPassword:'',
            rUsername:'',
            rPassword:'',
            rConfirmPass:''
        }
    }

    ChangeLUsername = (event) => {
        this.setState({
            lUsername: event.target.value
        })
    }

    ChangeLPassword = (event) => {
        this.setState({
            lPassword: event.target.value
        })
    }

    ChangeRUsername = (event) => {
        this.setState({
            rUsername: event.target.value
        })
    }

    ChangeRPassword = (event) => {
        this.setState({
            rPassword: event.target.value
        })
    }

    ChangeRConfirmPass = (event) => {
        this.setState({
            rConfirmPass: event.target.value
        })
    }

    ChangeLUsername = (event) => {
        this.setState({
            lUsername: event.target.value
        })
    }

    LoginHandler(){
        if(state.lUsername != '' && state.lPassword != ''){
            this.props.loginHandler(state.lUsername,state.lPassword)
        }
    }

    RegisterHandler(){
        if(state.rUsername != '' && state.rPassword != ''){
            if(state.rPassword == state.rConfirmPass){
                this.props.loginHandler(state.rUsername,state.rPassword)
            }
        }
    }
        

    render() { 
        return (
        <div className='small-form'>
            <button className='x-button' onClick={this.props.xHandler}>X</button>
            <form onSubmit={this.props.loginHandler}>
                <h2>Login to Account</h2>
                <label>Username:</label>
                <input type='text' 
                    value={this.state.lUsername}
                    onChange={this.ChangeLUsername}/><br/>
                <label>Password:</label>
                <input type='password' 
                    value={this.state.lPassword}
                    onChange={this.Change}/><br/>
                <button type='submit' className='red-button'>Login</button>
            </form>
            <form onSubmit={this.props.registerHandler}>
            <h2>Register new Account</h2>
                <label>Username:</label>
                <input type='text' 
                    value={this.state.rUsername}
                    onChange={this.Change}/><br/>
                <label>Password:</label>
                <input type='password' 
                    value={this.state.rPassword}
                    onChange={this.Change}/><br/>
                <label>Confirm Password:</label>
                <input type='password' 
                    value={this.state.rConfirmPass}
                    onChange={this.Change}/><br/>
                <button type='submit' className='red-button'>Register</button>
            </form>
        </div>
        );
    }
}
 
export default LoginRegister;