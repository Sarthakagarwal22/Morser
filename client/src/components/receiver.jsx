import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
import https from 'https';

class Receiver extends Component {
    socket = io();
    videoEnded = true;
    index = -1;
    state = {
        showText: false,
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
        this.socket.on('sendMorseCode', msg => {
            var toPlay = this.playMorseCode(msg);
            window.navigator.vibrate(toPlay);
        })
        this.socket.on('connect_error', err => this.handleErrors());
        this.socket.on('connect_failed', err => this.handleErrors());
        this.socket.on('disconnect', err => this.handleErrors());
        setInterval(() => https.get(`stayUp`), 60 * 1000);
    }

    render() {
        return (
            <div>
                <button onClick={() => window.location = `${window.location.origin}/sender?id=${this.props.roomId}`}>Become Sender</button> <br/><br/>
                {!this.state.showText && <p><button onClick={()=>this.setState({showText: true})}>Click here</button> to start receiving morse code</p> }
                {this.state.showText && "As Soon as the sender will send a morse code, you will get the vibrations"}
            </div>
        );
    }

    playMorseCode = (code) => {
        var T = 200;
        var arrayToPlay = [];
    
        for(let i=0; i<code.length ; i++) {
            var char = code.charAt(i);
            // we first check if the code we received is a "."
            if (char === '.') {
                // add vibrate of 1T
                arrayToPlay.push(T);
            } else if (char === '-') {
                // add vibrate of 3T
                arrayToPlay.push(3*T);
            } else if (char === ' ') {
                // add pause of 3T
                arrayToPlay.push(3*T);
            } else if (char === '|') {
                arrayToPlay.push(7*T);
            }
    
            // we might need to add a spacer if the next character is either a "." or a "-"
            // and the current char is either a "." or a "-"
            if (((i + 1) < code.length)
                && (code.charAt(i) === "." || code.charAt(i) === "-")
                && (code.charAt(i+1) === "." || code.charAt(i+1) === "-")) {
                arrayToPlay.push(T);
            }
        }
    
        return arrayToPlay;
    }
}

export default Receiver;