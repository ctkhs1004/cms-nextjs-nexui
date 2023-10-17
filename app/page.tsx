'use client'
import {Input, Button} from "@nextui-org/react";
import React, {useState, useEffect, useCallback} from "react";
import {useRouter} from 'next/navigation';
import DemoAuthForm from "@/app/signIn/DemoAuthFrom";

type Variant = 'KEY' | 'LOGIN';
export default function SignIn() {
    const [key, setKey] = useState('');
    const [variant, setVariant] = useState<Variant>('KEY')
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

    const toggleVariant = useCallback(() => {
        if (variant === "KEY") {
            setVariant("LOGIN")
        }

        if (variant === "LOGIN") {
            setVariant("KEY")
        }
    }, [variant])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <div className="mb-1">
                {variant === "LOGIN" && (
                    <div className="p-8 rounded-lg shadow-md w-96">
                        <h1 className="text-2xl mb-4 text-center">Demo Login</h1>
                        <DemoAuthForm/>
                    </div>
                )}
                {variant === 'KEY' && (
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
                )}
            </div>
            <div className="flex gap-2 justify-center text-sm  px-2 text-gray-500">
                <div onClick={toggleVariant}
                     className="underline cursor-pointer">
                    {variant === "KEY" ? 'Use Demo Login' : 'Sign in with your key'}
                </div>
            </div>

        </div>

    );
}