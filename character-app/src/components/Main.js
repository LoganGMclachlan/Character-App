import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList'
import MainPanel from './MainPanel';

class Main extends Component {
    render() { 
        return (
        <div className='Main'>
            <CharacterList/>
            <MainPanel/>
        </div>
        );
    }
}
 
export default Main;