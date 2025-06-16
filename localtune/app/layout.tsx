import type { Metadata } from 'next';
import './globals.css';
import { PlayerContext } from '@/context/player-context';

export const metadata: Metadata = {
	title: 'LocalTune',
	description:
		'A self-hosted server for your music, focused on organizing your music',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<PlayerContext>
				<body className={`antialiased`}>{children}</body>
			</PlayerContext>
		</html>
	);
}
