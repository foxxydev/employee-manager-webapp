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
                    : <div>
                        <h1>You're not logged in. Please sign in to continue...</h1>
                        <Link to="/signin">Go to sign in page</Link>
                    </div>
                }
            </div>
        );
    }
}

export default Home;