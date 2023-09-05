import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	cacheDir: '../../node_modules/.vite/client',
	//? Uncomment To set base URL
	// base: '/SAD21-IMS-SYSTEM/',

	server: {
		port: 4200,
		host: 'localhost',
		watch: {
			usePolling: true,
		},
	},

	preview: {
		port: 4300,
		host: 'localhost',
	},

	plugins: [
		react(),
		// viteTsConfigPaths({
		// 	root: '../../',
		// }),
	],

	// test: {
	// 	globals: true,
	// 	cache: {
	// 		dir: '../../node_modules/.vitest',
	// 	},
	// 	environment: 'jsdom',
	// 	include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
	// },

	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [
	//    viteTsConfigPaths({
	//      root: '../../',
	//    }),
	//  ],
	// },
});
