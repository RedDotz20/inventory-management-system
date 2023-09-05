/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
				opacity: 'opacity',
				fade: 'opacity, visibility',
			},
			keyframes: {
				fadeOut: {
					'0%': { opacity: '1', visibility: 'visible' },
					'100%': { opacity: '0', visibility: 'hidden' },
				},
				fadeIn: {
					'0%': { opacity: '0', visibility: 'hidden' },
					'100%': { opacity: '1', visibility: 'visible' },
				},
			},
			animation: {
				fadeOut: 'fadeOut 0.5s ease-out',
				fadeIn: 'fadeIn 0.5s ease-in',
			},
		},
	},
	plugins: [],
};
