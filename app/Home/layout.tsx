import '@/styles/globals.css';
import SideNavBar from "@/components/Sidebar/SideNavBar"
import React from "react";
import NavBar from '@/components/NavBar/NavBar';
import {Footer} from '@/components/Footer/index'
import getCurrentUser from '@/utils/getCurrentUser';
import { getSession } from 'next-auth/react';

export default async function HomeLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <div className="position-absolute w-100"></div>
            <div className="flex">
                <aside className="position-fixed h-100"><SideNavBar/></aside>
            </div>
            <main className="pl-60 d-flex flex-column min-vh-100">
                {children}
                <Footer/>
            </main>
        </div>
    );
}

