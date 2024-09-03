import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { BackgroundBeams } from "@/components/aceternityui/background-beams";
import Footer from "@/components/Footer";

import PageAnimatePresence from "@/components/PanageAnimatePresence";
import { ShootingStars } from "@/components/aceternityui/shooting-stars";
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-mont' });

export const metadata: Metadata = {
  title: "Sri Sai Group of Institutes",
  description: "Sri Sai Group of Institutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>

      <body className={`${montserrat.className} text-dark dark:text-light bg-light dark:bg-dark`}>

        <Header></Header>
        <div className={"w-full h-full inline-block z-0"}>
        <ShootingStars />
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </div>
        <Footer />
      </body>
    </html>
  );
}
