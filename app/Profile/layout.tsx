import SideNavBar from "@/components/Sidebar/SideNavBar";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import {Footer} from "@/components/Footer";

export default function ReportLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="position-absolute w-100"></div>
            <div className="flex">
                <aside className="position-fixed h-100"><SideNavBar/></aside>
            </div>
            <main className="pl-60 d-flex flex-column min-vh-100 justify-center items-center">
                <div>
                    <header className="header mb-4 px-sm-2 sticky top-0 z-50 border-bottom">
                        <NavBar/>
                    </header>
                </div>
                <section className="body flex-grow-1 px-sm-2 mb-4">{children}</section>
                <Footer/>
            </main>
        </div>
    );
}

