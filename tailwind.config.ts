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
				deepBlue: "#12153B",
				neonGreen: "#39ff14",
			},
			backgroundImage: {
				portal: "url('/portal.png')",
				fundo: "url('/bg.jpg')",
			},
			backgroundSize: {
				auto: "auto",
				cover: "cover",
				contain: "contain",
				"50%": "50%",
				"25%": "25%",
			},
			keyframes: {
				neonPulse: {
					"0%, 100%": {
						"box-shadow":
							"0 0 2.5px #39ff14, 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 10px #39ff14",
					},
					"50%": {
						"box-shadow":
							"0 0 10px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14, 0 0 20px #39ff14",
					},
				},
			},
			animation: {
				neonPulse: "neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse",
				"spin-slow": "spin 3s linear infinite",
			},
		},
	},
	plugins: [],
};
export default config;
