"use client"
import EmptyState from "@/components/Sidebar/EmptyState";
import Contents from "../Contents/Contents";
import NavBar from "@/components/NavBar/NavBar";
import {useRouter} from 'next/navigation';
import {SessionProvider, useSession} from "next-auth/react";
import {useEffect} from "react";

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
            <div className="flex justify-center items-center py-7">
                <Contents/>
            </div>
        </ SessionProvider>
    );
}
