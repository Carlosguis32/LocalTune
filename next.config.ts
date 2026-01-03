import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'standalone', // Para Tauri - genera un servidor optimizado
	images: {
		unoptimized: true, // Necesario para Tauri
	},
};

export default nextConfig;
