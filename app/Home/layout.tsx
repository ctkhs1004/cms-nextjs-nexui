import '@/styles/globals.css';
import SideNavBar from "@/components/Sidebar/SideNavBar"
import React from "react";
import NavBar from '@/components/NavBar/NavBar';
import {Footer} from '@/components/Footer/index'

export default function HomeLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <div className="position-absolute w-100"></div>
            <div className="flex">
                <aside className="position-fixed h-100"><SideNavBar/></aside>
            </div>
            <main className="pl-60 d-flex flex-column min-vh-100">
                <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
                    <NavBar/>
                </header>
                <section className="body flex-grow-1 px-sm-2 mb-4">{children}</section>
                <Footer/>
            </main>
        </div>
    );
}

