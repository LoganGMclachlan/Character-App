import React from 'react';

import Header from './components/Header';
import './components/App.css';


function App() {
  var loggedIn = false
  var user = {username:"Logan", password:"Password"}

  return (
    <div className='app'>
      <Header loggedIn={loggedIn} user={user}/>
    </div>
  );
}

export default App;
