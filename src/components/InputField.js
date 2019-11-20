import React, { Component } from "react"
import PropTypes from "prop-types"
import { logout, isLogin } from '../utils';

class InputField extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    };
    state = {
        email: "",
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
                        this.props.onSubmitMessage(this.state);
                        this.setState({ email: "" , startDate: "", endDate: "", details: ""});
                    }}
                >
                    <input
                        type = "text"
                        placeholder = {"Enter e-mail..."}
                        value = {this.state.email}
                        onChange = { e =>
                            this.setState({
                                //sent message is:
                                email: e.target.value
                            })}
                    />
                    <br /><br />
                    From:
                    <input
                        type = "date"
                        value = {this.state.startDate}
                        onChange = { e => 
                            this.setState({
                                //sent details are:
                                 startDate: e.target.value
                            })
                        }
                    /> To:
                    <input
                        type = "date"
                        value = {this.state.endDate}
                        onChange = { e => 
                            this.setState({
                                //sent details are:
                                 endDate: e.target.value
                            })
                        }
                    />
                    <br /><br />
                    <input
                        type = "text"
                        placeholder = {"Enter details (optional)"}
                        value = {this.state.details}
                        onChange = { e => 
                            this.setState({
                                //sent details are:
                                 details: e.target.value
                            })
                        }
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