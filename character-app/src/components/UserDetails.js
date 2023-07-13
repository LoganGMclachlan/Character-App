import React, { PureComponent } from 'react';
import './App.css';

class UserDetails extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            username:this.props.user.username,
            email:this.props.user.email
        }
    }
        
    ChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }
    ChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    UpdateUsernameHandler = event => {
        if (this.state.username != ''){
            this.props.editUsername(this.state.username)
            alert(`Username updated to ${this.state.username}!`)
        }
        else{
            alert('Enter new username')
        }
        event.preventDefault()
    }

    UpdateEmailHandler = event => {
        this.props.editEmail(this.state.email)
        alert(`Email updated to ${this.state.email}!`)
        event.preventDefault()
    }

    LogoutHandler = event => {
        this.props.logout()
        event.preventDefault()
    }

    DeleteHandler = event => {
        var confirmed = window.confirm("Are you sure you want to delete this account?")
        if (confirmed){
            this.props.deleteAccount(this.props.user)
            alert("Account deleted successfuly")
        }
        event.preventDefault()
    }

    render() { 
        return (
        <div>
            <h2>Account Details</h2>

            <form onSubmit={this.UpdateUsernameHandler}>
                <input value={this.state.username} onChange={this.ChangeUsername} className='input-field'/>
                <button type='submit' className='red-button'>Update Username</button>
            </form>
            <form onSubmit={this.UpdateEmailHandler}>
                <input value={this.state.email} onChange={this.ChangeEmail} className='input-field'/>
                <button type='submit' className='red-button'>Update Email</button>
            </form>

            <button onClick={this.LogoutHandler}>Logout</button>
            <br/>
            <button onClick={this.DeleteHandler} className='red-button'>Delete Account</button>
        </div>
        );
    }
}
 
export default UserDetails;