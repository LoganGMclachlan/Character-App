import React, { Component } from 'react';
import './App.css';

class LoginRegister extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        return (
        <div className='small-form'>
            <button className='corner-x' onClick={this.props.xHandler}>X</button>
            <form>
                <h2>Login to Account</h2>
                <label>Username:</label>
                <input type='text'/><br/>
                <label>Password:</label>
                <input type='password'/><br/>
                <button type='submit' className='red-button'>Login</button>
            </form>
            <form>
            <h2>Register new Account</h2>
                <label>Username:</label>
                <input type='text'/><br/>
                <label>Password:</label>
                <input type='password'/><br/>
                <label>Confirm Password:</label>
                <input type='password'/><br/>
                <button type='submit' className='red-button'>Register</button>
            </form>
        </div>
        );
    }
}
 
export default LoginRegister;