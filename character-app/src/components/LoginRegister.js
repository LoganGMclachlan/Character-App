import React, { PureComponent } from 'react';
import './App.css';

class LoginRegister extends PureComponent {
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
        this.setState({lUsername: event.target.value})
    }

    LoginHandler = event => {
        if(this.state.lUsername != '' && this.state.lPassword != ''){
            this.props.loginHandler(this.state.lUsername,this.state.lPassword)
        }
        else{
            alert("Username or password fields are empty")
        }
        event.preventDefault()
    }

    RegisterHandler(){
        if(this.state.rUsername != '' && this.state.rPassword != ''){
            if(this.state.rPassword == this.state.rConfirmPass){
                this.props.loginHandler(this.state.rUsername,this.state.rPassword)
            }
        }
    }
        

    render() { 
        return (
        <div className='small-form'>
            <button className='x-button' onClick={this.props.xHandler}>X</button>
            
            <form onSubmit={this.LoginHandler}>
                <h2>Login to Account</h2>
                <label>Username:</label>
                <input type='text' 
                    value={this.state.lUsername}
                    onChange={this.ChangeLUsername}/><br/>
                <label>Password:</label>
                <input type='password' 
                    value={this.state.lPassword}
                    onChange={this.ChangeLPassword}/><br/>
                <button type='submit' className='red-button'>Login</button>
            </form>

            <form onSubmit={this.RegisterHandler}>
            <h2>Register new Account</h2>
                <label>Username:</label>
                <input type='text' 
                    value={this.state.rUsername}
                    onChange={this.ChangeRUsername}/><br/>
                <label>Password:</label>
                <input type='password' 
                    value={this.state.rPassword}
                    onChange={this.ChangeRPassword}/><br/>
                <label>Confirm Password:</label>
                <input type='password' 
                    value={this.state.rConfirmPass}
                    onChange={this.ChangeRConfirmPass}/><br/>
                <button type='submit' className='red-button'>Register</button>
            </form>
        </div>
        );
    }
}
 
export default LoginRegister;