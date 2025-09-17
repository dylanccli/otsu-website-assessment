import "./globals.css";
import { Catamaran } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const catamaran = Catamaran({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-catamaran",
});

export const metadata = {
	title: {
		default: "Ontario Tech Student Union",
		template: "%s | Ontario Tech Student Union",
	},
	description:
		"The OTSU is the voice and vision of the Ontario Tech student body. We provide services and amenities that foster friendship, promote development, and improve student life.",
};

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${catamaran.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
