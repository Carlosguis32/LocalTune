import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu.tsx';
import Player from './pages/Player.tsx';
import { ThemeProvider } from '@/components/theme-provider';
import Settings from './pages/Settings.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Player />} />
					<Route path="/player" element={<Player />} />
					<Route path="/playlists" element={<Menu />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
