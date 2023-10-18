'use client'
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {getApi} from "@/utils/api";
import url from "@/app/api/url";
import {UserData} from "@/types";
import React, {useState} from "react";
import {signIn} from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"

const DemoAuthForm = () => {
    const router = useRouter();
    const [apiData, setApiData] = useState<UserData | null>(null)
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
       signIn('credentials', {
           ...data,
           redirect: false
       }).then((callback) => {
           console.log("callback ->" + callback ?.error)
           if(callback ?.error){
               //toast.error('Invalid')
               alert("Invalid")
           }

           if(callback ?.ok && !callback ?.error){
               router.push('/Home')
           }
       })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block text-sm font-medium leading-6 text-white-900">Email</label>
                <div className="p-3 rounded-lg shadow-md w-96">
                    <input className="w-full max-w-xs rounded h-8" placeholder="email"
                           type="text" {...register('email', {required: 'Email is required', pattern: /^\S+@\S+$/i})} />
                </div>

                <label className="block text-sm font-medium leading-6 text-white-900">Password</label>
                <div className="p-3 rounded-lg shadow-md w-96">
                    <input className="w-full max-w-xs rounded h-8" placeholder="password"
                           type="password" {...register('password', {
                        required: 'Password is required',
                    })} />
                </div>
                <div className="p-3 rounded-lg shadow-md w-96">
                    <button className="mt-3 w-full max-w-xs bg-blue-500 text-white p-2 rounded ">Login</button>
                </div>
            </form>
        </>
    )
}
export default DemoAuthForm;
