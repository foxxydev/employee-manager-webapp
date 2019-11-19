import React, { Component } from "react"
import PropTypes from "prop-types"
import { logout, isLogin } from '../utils';

class InputField extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    };
    state = {
        message: "",
        startDate: "",
        endDate: "",
        details: ""
    };

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        console.log("handlelogout!");
        logout(this.props);
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <form
                    action = "."
                    onSubmit = {e => {
                        e.preventDefault();
                        this.props.onSubmitMessage(this.state.message);
                        this.setState({ message: "" });
                    }}
                >
                    <input
                        type = "text"
                        placeholder = {"Enter e-mail..."}
                        value = {this.state.message}
                        onChange = { e => 
                            this.setState({
                                //sent message is:
                                message: e.target.value
                            })}
                    />
                    <br /><br />
                    From:
                    <input
                        type = "date"
                        value = {this.state.startDate}
                    /> To:
                    <input
                        type = "date"
                        value = {this.state.startDate}
                    />
                    <br /><br />
                    <input
                        type = "text"
                        placeholder = {"Enter details (optional)"}
                        value = {this.state.details}
                        onChange = { e => 
                            this.setState({
                                //sent message is:
                                details: e.target.details
                            })}
                    />
                    <br /><br />
                    <input type="submit" value={"Send"} />
                </form>
                <br />
                <button onClick={() => this.handleLogout()}>Click here to log out</button>
            </div>
        )
    }
}

export default InputField;