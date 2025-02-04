import { Radio_Canada, Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  preload: true,
  display: "swap",
});

export const radioCanada = Radio_Canada({
  subsets: ["latin"],
  variable: "--font-radio-canada",
  preload: true,
  display: "swap",
});
