import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import {Footer} from '@/components/Footer/index'
import { Navbar } from '@/components/NavBar/navbar';
import clsx from 'clsx';
import {getSession} from "next-auth/react";
import {session} from "next-auth/core/routes";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({ children}: { children: React.ReactNode; session : any}) {

	return (
		<html lang='ja' suppressHydrationWarning>
			<head />
			<body className={clsx(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable)}>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark'}} session={getSession()}>
					<div className='relative flex flex-col h-screen'>
						<Navbar />
						<main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>
							{children}
						</main>
						<Footer/>
					</div>
				</Providers>
			</body>
		</html>
	);
}

