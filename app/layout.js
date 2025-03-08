import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkTweak",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased duration-700 dark:bg-[#b4b7bf] bg-slate-900`}
      >
        <div className="relative z-50">
          <Navbar  />
        </div>
        <div className="duration-700  relative z-0  h-fit overflow-hidden ">
          <NextTopLoader /> {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
















