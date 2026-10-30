import type { MetadataRoute } from "next";
import { doctor } from "@/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    short_name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio.substring(0, 160),
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#880361",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
