/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'program-1': "url('/assets/program1.jpg')",
				'program-2': "url('/assets/program2.jpg')",
				'program-3': "url('/assets/program3.jpg')",
			  },
			borderRadius: {
				'lg': '1.5rem',
			},
		},
	},
	plugins: [],
}
