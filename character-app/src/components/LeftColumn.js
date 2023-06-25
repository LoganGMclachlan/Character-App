import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';

class LeftColumn extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div className='left-column'>
                <h2 className='left-column-title'>Characters</h2>
                {this.props.user
                    ? <CharacterList user={this.props.user}/>
                    : <p>Login to view your characters</p>
                }
            </div>
         );
    }
}
 
export default LeftColumn;