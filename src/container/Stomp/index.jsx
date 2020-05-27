import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Stomp } from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import actions from 'store/stomp/action'

import { config } from 'constants/stomp'

const socket = SockJS(config.url);
const ws = Stomp.over(socket);

const WebSocket = () => {
    const [state, setState] = useState({ ws, maxReconnect: 3 })
    const { routes } = useSelector(store => store.stomp)
    const dispatch = useDispatch()

    const setupWebSocket = () => {
        const webSoc = state.ws;
        webSoc.connect({}, connect);
        webSoc.error = (err) => {
            if (state.maxReconnect > 0) {
                setState({ ...state, maxReconnect: state.maxReconnect - 1 });
            }
        };
    }

    const connect = () => {
        setState({ ...state, maxReconnect: state.maxReconnect });
        routes.forEach((route) => {
            const webSoc = state.ws;
            webSoc.subscribe(route.url, (msg) => { 
                dispatch(actions.receivedMessage(msg.body, route.action)) 
            });
            webSoc.subscribe('/topic/erros', (msg) =>{
                console.log(JSON.parse(msg.body))
            })
        });
    }

    useEffect(() => {
        setupWebSocket()
    }, [])

    return (
        <div></div>
    )
}

export default WebSocket
