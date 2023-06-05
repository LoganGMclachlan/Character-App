import React, { PureComponent } from 'react';
import './App.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( <div>
            <h1 className="App-header">Character App</h1>
        </div> );
    }
}
 
export default Header;