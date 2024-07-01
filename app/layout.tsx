import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import "./globals.css";

const BlinkerFont = Blinker({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Wubba Lubba Dub Dub",
	description:
		"The Rick and Morty API is a RESTful and GraphQL API based on the television show Rick and Morty",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${BlinkerFont.className} text-white`}>{children}</body>
		</html>
	);
}
