import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dreadveil | Turn-Based Strategy RPG",
  description:
    "Dreadveil is a dark fantasy turn-based tactical RPG. Build your squad, master every battle, and survive the horrors beyond the veil.",
  keywords: [
    "Dreadveil",
    "turn-based RPG",
    "tactical RPG",
    "dark fantasy",
    "indie game",
    "strategy game",
    "fantasy RPG",
  ],
  openGraph: {
    title: "Dreadveil | Turn-Based Strategy RPG",
    description:
      "A dark fantasy turn-based tactical RPG with squad building, progression, and strategic combat.",
    images: ["/images/logo-full.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreadveil | Turn-Based Strategy RPG",
    description:
      "A dark fantasy turn-based tactical RPG with squad building, progression, and strategic combat.",
    images: ["/images/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}