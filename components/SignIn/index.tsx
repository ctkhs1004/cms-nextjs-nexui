'use client'
import {Input, Image, Button} from "@nextui-org/react";
import React, {useState} from "react";
// import Router from 'next/router';
export const SignInComponents = () => {
    const [key, setKey] = useState('');
    const handleLoginClick = (key: string, path:string) => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log('handleLoginClick is called', key);
        if (key.startsWith('nsec')) {
            // ここでログインロジックを実装します
            console.log('Logging in...');
        } else {
            alert('The private key must start with nsec');
        }
        // Router.push(path);
    };
    return (
        <div　className="min-h-screen flex items-center justify-center ">
            <div className="p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl mb-4 text-center">SignIn</h1>
                <Input
                    isRequired
                    type="text"
                    label="pubKey"
                    className="max-w-xs"
                    value = {key}
                    onChange={(e) => setKey(e.target.value)}
                />
                <Button
                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded "
                    variant="bordered"
                    onClick={() => handleLoginClick(key,'/Home')}
                >
                    SignIn
                </Button>
            </div>
            <Image
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
        </div>

    );
}