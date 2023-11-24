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
					"50": "#f5f5fd",
					"100": "#edecfb",
					"200": "#dddcf8",
					"300": "#c3c0f2",
					"400": "#a89fea",
					"500": "#8673df",
					"600": "#7255d2",
					"700": "#6343be",
					"800": "#5237a0",
					"900": "#452f83",
					"950": "#2a1d58",
				},
				"text-black": "#181b19",
			},
			fontFamily: {
				poppins: ["var(--font-poppins)"],
			},
		},
	},
	plugins: [],
};
export default config;
