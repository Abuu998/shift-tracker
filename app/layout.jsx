import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Provider from "@/components/Provider";

const poppins = Poppins({ 
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
	title: "Shift Tracker",
	description: "Track your start and end of shift",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Provider>
					<Navbar />
					{children}
				</Provider>
				<SpeedInsights />
			</body>
		</html>
	);
}
