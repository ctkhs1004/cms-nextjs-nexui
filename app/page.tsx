'use client'
import {Input, Button} from "@nextui-org/react";
import React, {useState, useEffect} from "react";
import {useRouter} from 'next/navigation';

export default function SignIn() {
    const [key, setKey] = useState('');

    const router = useRouter();

    const handleLoginClick = (key: string) => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log('handleLoginClick is called', key);
        if (key.startsWith('nsec')) {
            router.push('/Home');
        } else {
            alert('The private key must start with nsec');
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center ">
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
        </div>

    );
}
