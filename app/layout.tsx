import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-text",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srivatsan Rangan | Full-Stack Developer & AI Engineer",
  description: "Portfolio of Srivatsan Rangan - Bridging design and engineering with scrollytelling experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-text bg-void text-text-primary antialiased selection:bg-beacon-orange selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
