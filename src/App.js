import React, { Component } from 'react'
import logo from './img/logo.svg';
import './css/App.css';

import Chat from './Chat'

class App extends Component {
    render() {
        return (
            // [HV] commented the test auto-generated code
            /*<header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            </header>*/
            <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
                <Chat />
            </div>
        )
    }
}

export default App;
