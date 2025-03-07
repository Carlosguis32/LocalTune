import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/Menu.tsx';
import Player from './pages/Player.tsx';
import { ThemeProvider } from '@/components/theme-provider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/player" element={<Player />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
