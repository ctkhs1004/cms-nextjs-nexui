import '@/styles/globals.css';
import SideNavBar from "@/components/Sidebar/SideNavBar"
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full p-0">
            <SideNavBar/>
            <div className="justify-center">
                {children}
            </div>
        </div>
            
    );
}
