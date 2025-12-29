import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ClientLayout } from './client-layout';
import './globals.css';

export const metadata: Metadata = {
	title: 'Melira',
	description: 'A self-hosted server for your music, focused on organizing your music',
};

const montserrat = Montserrat({
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={montserrat.className}>
			<body className="antialiased">
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
