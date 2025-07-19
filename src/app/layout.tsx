import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: "300",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyson Donnelly",
  description: "Portfolio of VFX and Compositing Supervisor, Tyson Donnelly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
