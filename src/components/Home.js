import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';
import InputComponent from "./InputComponent"

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                {this.state.isLogin ?
                    <InputComponent />
                    : <Link to="/signin">Go to sign in page</Link>
                }
            </div>
        );
    }
}

export default Home;