import type { Metadata } from "next";
import "@/styles/Styles.scss";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tăng Phúc Singer",
  description: "Tăng Phúc Singer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
