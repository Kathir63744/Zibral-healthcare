import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://zibralhealthcare.in"),

  title: "Zibral Healthcare",

  description:
    "Zibral Healthcare delivers quality healthcare and pharmaceutical solutions.",

  icons: {
    icon: "/logo1.png",
  },

  verification: {
    google: "XwkgGaPkc6KTkF_-M71gjhdPH2xEpg1TgGBpMlfZRzQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}