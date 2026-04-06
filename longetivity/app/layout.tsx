import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Since Cabinet Grotesk is an external API font, we'll import it in globals.css
// Or we can just use the link tag standard approach inside layout.

export const metadata: Metadata = {
  title: "Longevity Protocol",
  description: "Your personalised longevity protocol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
