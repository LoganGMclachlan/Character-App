import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        return (
        <div className='header'>
            <div className="header-left">
                <h1 className='Title'>Character App</h1>
            </div>

            <div className="header-right">
                {this.props.user
                    ? <h2 onClick={this.props.showUser()}>Logged in as {this.props.user.username}</h2>
                    : <h2 onClick={this.props.showLogin()}>Login or Register</h2>
                }
            </div>
        </div>
        );
    }
}
 
export default Header;