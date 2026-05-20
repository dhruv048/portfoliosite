import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: site.title,
		short_name: site.name,
		description: site.description,
		start_url: "/",
		display: "standalone",
		background_color: "#fafaf9",
		theme_color: "#f43f5e",
		lang: "en",
		icons: [
			{
				src: "/brand-logo.png",
				sizes: "944x529",
				type: "image/png",
			},
		],
	};
}
