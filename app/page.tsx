'use client'
import {Input, Image, Button} from "@nextui-org/react";
import React, {useState} from "react";
import {useSession, signIn, signOut, getSession} from 'next-auth/react';
import { NextPage } from 'next';
// import Router from 'next/router';
export default function SignInComponents() {
	const [key, setKey] = useState('');
	const { data: session } = useSession();
	console.log(session);
	return (
		<div　className="min-h-screen flex items-center justify-center ">
			<>
			    {
			        // セッションがある場合、ログアウトを表示
			        session && (
			            <div>
			                <h1>ようこそ, {session.user && session.user.email}</h1>
			                <button onClick={() => signOut()}>ログアウト</button>
			            </div>
			        )
			    }
			    {
			        // セッションがない場合、ログインを表示
			        // ログインボタンを押すと、ログインページに遷移する
			        !session && (
			            <div>
			                <p>ログインしていません</p>
			                <button onClick={() => signIn('google', {}, { prompt: 'login' })}>ログイン</button>
			            </div>
			        )
			    }
			</>
		{/*	{*/}
		{/*		!session && (*/}
		{/*			<div className="p-8 rounded-lg shadow-md w-96">*/}
		{/*				<h1 className="text-2xl mb-4 text-center">SignIn</h1>*/}
		{/*				<Input*/}
		{/*					isRequired*/}
		{/*					type="text"*/}
		{/*					label="pubKey"*/}
		{/*					className="max-w-xs"*/}
		{/*					value = {key}*/}
		{/*					onChange={(e) => setKey(e.target.value)}*/}
		{/*				/>*/}
		{/*				<Button*/}
		{/*					className="mt-4 w-full bg-blue-500 text-white p-2 rounded "*/}
		{/*					variant="bordered"*/}
		{/*					onClick={() => signIn()}*/}
		{/*				>*/}
		{/*					SignIn*/}
		{/*				</Button>*/}
		{/*			</div>*/}
		{/*		)*/}
		{/*	}*/}
		</div>

	);
}
