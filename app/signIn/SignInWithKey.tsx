'use client'
import {Input, Button} from "@nextui-org/react";
import React, {useState, useEffect, useCallback} from "react";
import {useRouter} from 'next/navigation';
import WebSocket from 'ws';

const SignInWithKey = () => {
    const [key, setKey] = useState('');
    const router = useRouter();

    // const startWebSocket = (key: string) => {
    //     const socket = new WebSocket('ws://localhost:8081');
    //
    //     socket.onopen = () => {
    //         console.log('WebSocket connected');
    //     };
    //
    //     socket.onmessage = (key) => {
    //         const privateKey = key;
    //         console.log(`Received key: ${privateKey}`);
    //     };
    //
    //     socket.onclose = (event) => {
    //         if (event.wasClean) {
    //             console.log(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
    //         } else {
    //             console.error(`Connection died`);
    //         }
    //     };
    //
    //     socket.onerror = (error) => {
    //         console.error(`WebSocket Error: ${error.message}`);
    //     };
    // }

    const handleLoginClick = (key: string) => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log('handleLoginClick is called', key);
        if (key.startsWith('nsec')) {
           // startWebSocket(key);
            alert('Valid');
        } else {
            alert('The private key must start with nsec');
        }
    };
    return (
        <div className="p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl mb-4 text-center">SignIn</h1>
            <Input
                isRequired
                type="text"
                label="pubKey"
                className="max-w-xs"
                value={key}
                onChange={(e) => setKey(e.target.value)}
            />
            <Button
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded "
                variant="bordered"
                onClick={() => {
                    handleLoginClick(key);
                }}
            >
                SignIn
            </Button>
        </div>
    )
}

export default SignInWithKey