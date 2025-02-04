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
  title: "PayScan - Payments",
  description: "PayScan is make a day to day life transaction activity easy to people's across the world. In PayScan Mobile Applications having multiple features & functionalities Pay bills, book movie tickets, train, flight & hotels booking, buy online game, pay restaurant bills, link bank accounts one stop solutions with high security we are using iris recognition(eyes blinking scanner), facial scanners, qr code scanning, finger print scanning which is provide a nice hands to use in day to day life make it sinple & easy!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
