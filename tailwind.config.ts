import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#fcf3f7",
					"100": "#f9eaf2",
					"200": "#f5d5e5",
					"300": "#ea9fc3",
					"400": "#e383af",
					"500": "#d65e91",
					"600": "#c33f72",
					"700": "#a82e59",
					"800": "#8b294a",
					"900": "#752641",
					"950": "#461123",
				},
				"text-black": "#181b19",
				"text-light": "#f1f1f1",
				"bg-white": "#ffffff",
			},
			fontFamily: {
				poppins: ["var(--font-poppins)"],
			},
		},
	},
	plugins: [],
};
export default config;
