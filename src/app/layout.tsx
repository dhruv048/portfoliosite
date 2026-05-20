import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLdGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
	metadataBase: new URL(site.siteUrl),
	title: {
		default: site.title,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	applicationName: site.name,
	category: "technology",
	icons: {
		icon: [{ url: "/brand-logo.png", type: "image/png" }],
		apple: [{ url: "/brand-logo.png", type: "image/png" }],
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
		verification: {
			google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
		},
	}),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full scroll-smooth overflow-x-hidden">
			<head>
				<link rel="author" href={site.siteUrl} />
				<link
					rel="stylesheet"
					href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=satoshi@400,500,700&display=swap"
				/>
				<JsonLd data={homeJsonLdGraph()} />
			</head>
			<body className="font-body min-h-full overflow-x-hidden bg-surface-50 text-surface-900 antialiased">
				{children}
			</body>
		</html>
	);
}
