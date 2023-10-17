'use client'
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {getApi} from "@/utils/api";
import url from "@/app/api/url";
import {UserData} from "@/types";
import React, {useState} from "react";

const DemoAuthForm = () => {
    const [apiData, setApiData] = useState<UserData | null>(null)
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const result: any = await getApi(url.getUserAuth);
            setApiData(result);
            console.log(apiData);
        } catch (error) {
            console.error('An error occurred while fetching the data.', error);
        }
        if (!apiData || apiData?.user.password !== data.password) {
            alert('Invalid your email or password');
        }

        if (apiData?.user.password === data.password) {
            alert('Success');
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block tet-sm font-medium leading-6 text-white-900">Email</label>
                <div className="p-3 rounded-lg shadow-md w-96">
                    <input className="w-full max-w-xs rounded" placeholder="email"
                           type="text" {...register('email', {required: 'Email is required', pattern: /^\S+@\S+$/i})} />
                </div>

                <label className="block tet-sm font-medium leading-6 text-white-900">Password</label>
                <div className="p-3 rounded-lg shadow-md w-96">
                    <input className="w-full max-w-xs rounded" placeholder="password"
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
