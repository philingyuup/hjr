import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigator from "./components/navigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HJR",
  description: "HJR Construction Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><Navigator/></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
