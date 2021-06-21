import React, { useState } from 'react';
import SockJsClient from 'react-stomp';
import Services from './Services';

const SOCKET_URL = 'http://localhost:8080/ws-message';

const WebSocketApp = () => {
    const [message, setMessage] = useState([]);

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onMessageReceived = (msg) => {
        setMessage(msg);
    }

    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/message']}
                onConnect={onConnected}
                onDisconnect={console.log("Disconnected!")}
                onMessage={msg => onMessageReceived(msg)}
                debug={false}
            />
            <div>
                <Services message = {message}/>
            </div>
        </div>
    );
}

export default WebSocketApp;