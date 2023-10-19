import '@/styles/globals.css';
import {Metadata} from 'next';
import {siteConfig} from '@/config/site';
import {fontSans} from '@/config/fonts';
import {Providers} from './providers';
import {Footer} from '@/components/Footer/index'
import {Toaster} from 'react-hot-toast';
//import clsx from 'clsx';
import AuthContext from '@/app/context/AuthContext';
import React from "react";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        {media: '(prefers-color-scheme: light)', color: 'white'},
        {media: '(prefers-color-scheme: dark)', color: 'black'},
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja' suppressHydrationWarning>
        <head/>
        <AuthContext>
            <body className="min-h-screen bg-background font-sans antialiased">
            <Providers themeProps={{attribute: 'class', defaultTheme: 'dark'}}>
                <div className='relative flex flex-col h-screen'>
                    <main className='container mx-auto max-w-7xl  px-6 flex-grow'>
                        {children}
                    </main>
                    <Footer/>
                </div>
                <Toaster/>
            </Providers>
            </body>
        </AuthContext>
        </html>
    );
}

