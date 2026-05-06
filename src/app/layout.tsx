import type { Metadata } from "next";
import { Inter, Instrument_Serif, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DELIQ.AI — Une équipe IA qui bosse pour vous 24/7",
  description:
    "24 agents intelligents pour indépendants, TPE et PME françaises. Mails, compta, prospection, SAV, réseaux : ils gèrent le bruit, vous gardez le contrôle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
