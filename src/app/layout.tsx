import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter ({
    subsets: ['latin'], 
    display: 'swap', 
    variable: '--font-inter', })

    const roboto_mono = Roboto_Mono ({
        subsets: ['latin'], 
        display: 'swap', 
        variable: '--font-roboto-mono',
    })
export const metadata: Metadata = {
  title: "LinkedIn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={` ${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
