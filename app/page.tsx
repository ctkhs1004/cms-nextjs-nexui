'use client'
import React, {useState, useEffect, useCallback} from "react";
import {useRouter} from 'next/navigation';
import DemoAuthForm from "@/app/signIn/DemoAuthFrom";
import SignInWithKey from "@/app/signIn/SignInWithKey";
import SignIn from "./signIn/page";

type Variant = 'KEY' | 'LOGIN';
export default function AppPage() {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <SignIn />
        </div>

    );
}