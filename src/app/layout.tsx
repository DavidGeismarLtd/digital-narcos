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
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  title: "Digital Narcos — Social Media Is the Biggest Drug Cartel of the Last 25 Years",
  description:
    "An open indictment. Social media companies deliberately engineered addiction at scale — targeting children, suppressing research, and profiting from the damage. The case, the evidence, the defendants, and what to do about it.",
  openGraph: {
    title: "Digital Narcos",
    description: "The biggest narcos of the last 25 years didn't sell cocaine. They sold your attention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
