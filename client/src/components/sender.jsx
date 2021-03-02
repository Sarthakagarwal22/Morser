import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
import https from 'https';
import morjs from 'morjs';

class Sender extends Component {
    socket = io();
    videoEnded = true;
    index = -1;
    state = {
        text:"",
        alerts:[]
    }

    handleErrors = () => {
        let alert = this.state.alerts;
        alert['sInactive'] = 'Server went inactive. Please refresh page.';
        this.setState({ alerts: alert });
    }

    showAlert = () => {
        return Object.keys(this.state.alerts).map(key => {
            const value = this.state.alerts[key];
            return (
                < Alert variant='danger' id={key} onClose={() => {
                    let alert = this.state.alerts;
                    delete alert[key];
                    this.setState({ alerts: alert })
                }} dismissible>
                    {value}
                </Alert >
            )
        })
    };

    componentDidMount = () => {
        this.socket.emit('register', { id: this.props.roomId });
        this.socket.on('connect_error', err => this.handleErrors());
        this.socket.on('connect_failed', err => this.handleErrors());
        this.socket.on('disconnect', err => this.handleErrors());
        setInterval(() => https.get(`stayUp`), 60 * 1000);
    }

    render() {
        return (
            <div>
                <button onClick={() => window.location = `${window.location.origin}/receiver?id=${this.props.roomId}`}>Become Receiver</button>
                <br/><br/>
                Enter the Morse Code you would like to send
                <br></br><br></br>
                <input type="text" value={this.state.text} onChange={(e) => this.handleTextChange(e)}/>
                <button onClick={() => this.handleOnClick()}>Send Morse Code</button>
            </div>
        );
    }

    handleTextChange = event => {
        const value = event.target.value
        this.setState((prevState) => {
            return {...prevState, text: value}
        })
    }

    handleOnClick = () => {
        const morseCode = morjs.encode(this.state.text, {mode: 'simple'});
        this.socket.emit('sendCode', {message: morseCode, id: this.props.roomId})
    }
}

export default Sender;