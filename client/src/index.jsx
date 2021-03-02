import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main'
import Sender from './components/sender';
import Receiver from './components/receiver';

const roomId = window.location.search.replace("?id=", '');

const path = window.location.pathname

if (roomId) {
    if(path === "/sender")
    ReactDOM.render(<Sender roomId={roomId} />, document.getElementById('root'));
    
    if(path === "/receiver")
    ReactDOM.render(<Receiver roomId={roomId} />, document.getElementById('root'));
}
else ReactDOM.render(<Main />, document.getElementById('root'));