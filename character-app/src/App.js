import React from 'react';

import Header from './components/Header';
import LeftColumn from './components/LeftColumn';


function App() {
  var user = {username:"Logan", password:"Password"}
  var user2 = null

  return (
    <div>
      <Header user={user}/>
      <LeftColumn user={user}/>
    </div>
  );
}

export default App;
