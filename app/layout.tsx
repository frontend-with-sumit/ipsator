import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ipsator Assignment",
	description: "Product listing page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{children}
				<div>
					<Toaster />
				</div>
			</body>
		</html>
	);
}
