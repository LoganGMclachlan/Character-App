import React, { Component } from 'react';
import './App.css';
import UserSnippet from './UserSnippet'

class Header extends Component {
    render() { 
        return (
        <div className='Header'>
            <h1 className='Title'>Character App</h1>
            <UserSnippet/>
        </div> );
    }
}
 
export default Header;