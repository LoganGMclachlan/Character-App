import React, { Component } from 'react';
import './App.css';

class CharacterList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div>
                <table>
                    <tr>
                        Character 1
                    </tr>
                    <tr>
                        Character 2
                    </tr>
                    <tr>
                        Character 3
                    </tr>
                </table>
                <button className='create-new-button'>Create New</button>
            </div>
         );
    }
}
 
export default CharacterList;