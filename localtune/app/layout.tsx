import { ClientLayout } from './client-layout';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'LocalTune',
	description: 'A self-hosted server for your music, focused on organizing your music',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
