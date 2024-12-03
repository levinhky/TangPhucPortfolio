import type { Metadata } from "next";
import "./globals.css";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "@/styles/Styles.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tăng Phúc Singer",
  description: "Tăng Phúc Singer",
};

const BodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  display: "swap",
});

const MontserratF = Montserrat({
  subsets: ['latin'],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${BodoniModa.className} ${MontserratF.className}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
