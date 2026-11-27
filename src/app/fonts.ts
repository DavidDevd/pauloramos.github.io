import { Archivo, IBM_Plex_Mono } from "next/font/google";

/** Archivo is variable on weight and width; width is used for identity. */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

/** Reserved for code identifiers: SHAs, ports, paths and commands. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});
