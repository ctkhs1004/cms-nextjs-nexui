import '@/styles/globals.css';
import { fontSans } from '@/config/fonts';
import { Providers } from '@/app/providers';
import { Navbar } from '@/components/NavBar/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
		</div>
	);
}
