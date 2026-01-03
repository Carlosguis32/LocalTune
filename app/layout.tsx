import type { Metadata } from 'next';
import { Rethink_Sans } from 'next/font/google';
import { ClientLayout } from '../components/layout/client-layout';
import './globals.css';

export const metadata: Metadata = {
	title: 'Melira',
	description: 'A self-hosted server for your music, focused on organizing your music',
};

const rethinkSans = Rethink_Sans({
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={rethinkSans.className}>
			<body className="antialiased overflow-hidden">
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
