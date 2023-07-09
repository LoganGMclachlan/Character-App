import React, { PureComponent } from 'react';
import './App.css';

class UserDetails extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            username:this.props.user.username
        }
    }
        
    ChangeUsername = (event) => {
        this.setState({username: event.target.value})
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

    render() { 
        return (
        <div>
            <h2>Account Details</h2>

            <form onSubmit={this.UpdateUsernameHandler}>
                <input value={this.state.username} onChange={this.ChangeUsername}/>
                <button type='submit' className='red-button'>Update Username</button>
            </form>

            <button>Update Password</button>
            <br/>
            <button>Logout</button>
        </div>
        );
    }
}
 
export default UserDetails;