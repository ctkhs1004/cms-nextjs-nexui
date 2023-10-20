import '@/styles/globals.css';
import SideNavBar from "@/components/Sidebar/SideNavBar"
import React from "react";
import NavBar from '@/components/NavBar/NavBar';

export default function HomeLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-screen relative flex flex-col">
            <div className="flex h-full">
                <aside className="position-fixed h-100"><SideNavBar/></aside>
            </div>
            <main className="wrapper d-flex flex-column min-vh-100">
                <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
                    <NavBar/>
                </header>
                <section className="body flex-grow-1 px-sm-2 mb-4">{children}</section>
            </main>
        </div>
    );
}
