'use client'
import {Input, Button} from "@nextui-org/react";
import React, {useState, useEffect, useCallback} from "react";
import {useRouter} from 'next/navigation';
import WebSocket from 'ws';
import { signIn } from "next-auth/react";

const SignInWithKey = () => {
    const [key, setKey] = useState('');
    const router = useRouter();

    const handleLoginClick = (key: string) => {
        if (!key.startsWith('nsec')) {
            alert('The private key must start with nsec');
        }
        signIn('credentials', {
            key,
            redirect: false
        }).then((callback) => {
            if(callback ?.error){
                alert("Invalid Key")
            }

            if(callback ?.ok && !callback ?.error){
                router.push("/Home")
            }
        })
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