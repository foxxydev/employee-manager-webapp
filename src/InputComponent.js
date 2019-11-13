import React, { Component } from "react"
import InputField from "./InputField"

const URL = "ws://localhost:8080";

class InputComponent extends Component {
    state = {
        messages: [],
    }

    ws = new WebSocket(URL)

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log("Connected");
        };

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data);
            this.addMessage(message);
        };

        this.ws.onclose = () => {
            console.log("Disconnected");
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL)
            })
        };
    }

    addMessage = message =>
        this.setState(state => ({ messages: [message, ...state.messages] }));

    submitMessage = messageString => {
        // on submitting the InputComponent form, send the message, add it to the list and reset the input
        const message = {
            request: "employee.employeeList",
                data: {
                data: messageString
            }
        };
        this.ws.send(JSON.stringify(message));
        this.addMessage(message);
    }

    render() {
        return (
            <div>
                <InputField
                    ws={this.ws}
                    onSubmitMessage={messageString => this.submitMessage(messageString)}
                />
            </div>
        )
    }
}

export default InputComponent;