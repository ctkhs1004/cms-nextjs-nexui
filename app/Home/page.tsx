"use client"
import EmptyState from "@/components/Sidebar/EmptyState";
import Contents from "../Contents/Contents";
import NavBar from "@/components/NavBar/NavBar";
import {useRouter} from 'next/navigation';
import {SessionProvider, useSession} from "next-auth/react";
import {useEffect} from "react";
import getCurrentUser from "@/utils/getCurrentUser";

export default function HomePage() {
    const session = useSession();
   
    const router = useRouter();
    useEffect(() => {
        if (session?.status !== 'authenticated') {
            router.push('/Auth')
        }
    }, [session?.status, router]);
    return (
        <SessionProvider>
            <header className="header mb-4 px-sm-2 sticky top-0 z-50 border-bottom">
                <NavBar session={session}/>
            </header>
            <section className="body flex-grow-1 px-sm-2 mb-4">
                <div className="flex justify-center items-center py-7">
                    <Contents/>
                </div>
            </section>
        </ SessionProvider>
    );
}
