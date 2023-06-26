import { useState } from 'react';

import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import LoginRegister from './components/LoginRegister'


var user = {username:"Logan", password:"Password"}
var user2 = null

function App() {
  const [loginVisible, setVisible] = useState(false);
  
  const renderLoginComp = () => {
    setVisible(true);
  }

  const removeLoginComp = () => {
    setVisible(false);
  }

  return (
    <div>
      <Header user={user2} showLogin={renderLoginComp}/>
      <LeftColumn user={user2}/>
      {loginVisible &&
        (<LoginRegister xHandler={removeLoginComp}
          loginHandler={login}
          registerHandler={register}/>)
      }
    </div>
  );
}

export default App;
