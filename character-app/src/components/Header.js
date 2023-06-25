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
                    ? <h2>Logged in as {this.props.user.username}</h2>
                    : <></>
                }
            </div>
        </div>
        );
    }
}
 
export default Header;