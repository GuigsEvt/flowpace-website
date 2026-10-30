import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowpace.ai: Custom AI Agents. Managed Intelligence.",
  description:
    "We build, deploy, and manage custom AI agent systems that transform your entire business. Set the Pace. Own the Flow.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Flowpace.ai: Set the Pace. Own the Flow.",
    description:
      "Custom AI agent systems built for your business, managed by us.",
    url: "https://flowpace.ai",
    siteName: "Flowpace.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-background text-body font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
