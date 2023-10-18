import React from "react";
import AuthForm from '@/app/Auth/components/AuthForm';

const AuthPage = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className='relative flex flex-col h-screen'>
                <main className='container mx-auto max-w-7xl  px-6 flex-grow'>
                    <AuthForm/>
                    <div className="inline-block max-w-lg text-center justify-center">
                    </div>
                </main>
            </div>
        </section>
    )
}
export default AuthPage;