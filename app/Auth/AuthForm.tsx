'use client'
import React, {useState, useEffect, useCallback} from "react";
import {useRouter} from 'next/navigation';
import DemoAuthForm from "@/app/Auth/DemoAuthFrom";
import SignInWithKey from "@/app/Auth/SignInWithKey";
import {SessionProvider, useSession} from "next-auth/react";

type Variant = 'KEY' | 'LOGIN';
export default function SignIn() {
    const [variant, setVariant] = useState<Variant>('KEY')
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/Home')
        }
    }, [session?.status, router]);

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
                    <SignInWithKey/>
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