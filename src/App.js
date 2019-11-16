import React, { Component } from "react"
import logo from "./img/logo.svg";
import "./css/App.css";

import InputComponent from "./InputComponent"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome employee</h1>
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"/>
                    <InputComponent />
                </header>
            </div>
        )
    }
}

export default App;
