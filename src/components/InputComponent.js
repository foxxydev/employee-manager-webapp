import React, { Component } from "react"
import InputField from "./InputField"
import logo from "../img/logo.svg";
import "../css/App.css";
//import Interface from "./lib/Interface"

const URL = "ws://localhost:8080";

class InputComponent extends Component {
    ws = new WebSocket(URL)

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log("Connected");
        };

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data);
            console.log(message);
        };

        this.ws.onclose = () => {
            console.log("Disconnected");
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL)
            })
        };
    }

    submitMessage = messageString => {
        // on submitting the InputComponent form, send the message, add it to the list and reset the input
        /*let interfaceInstance = Interface.instance();
        interfaceInstance.request({
            request: "employee.employeeList",
                data: {
                data: messageString
            }
        }, function(reply) {
            console.log("success");
            console.log(reply);
        }, function(reply) {
            console.log("failure");
            console.log(reply);
        });*/
        //this.ws.send(JSON.stringify(message));
        // on submitting the InputComponent form, send the message, add it to the list and reset the input
        const message = {
            request: "employee.sendAnnualLeaveRequest",
                data: {
                data: messageString
            }
        };
        this.ws.send(JSON.stringify(message));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome employee</h1>
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"/>
                    <InputField 
                        onSubmitMessage={messageString => this.submitMessage(messageString)}/>
                </header>
            </div>
        )
    }
}

export default InputComponent;