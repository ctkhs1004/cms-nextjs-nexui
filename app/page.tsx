'use client'
import AuthPage from "@/app/Auth/page";
import {Footer} from '@/components/Footer/index'

export default function AppPage() {
    return (
        <div className="justify-center items-center h-screen">
            <AuthPage/>
            <Footer/>
        </div>

    );
}