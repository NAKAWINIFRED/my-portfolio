import {Outfit, Ovo}from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  // src: "./fonts/GeistVF.woff",
  // variable: "--font-geist-mono",
  // weight: "100 900",
  subsets: ["latin"],weight: ["400", "500", "600", "700"]
});
const ovo = Ovo({
  // src: "./fonts/GeistMonoVF.woff",
  // variable: "--font-geist-mono",
  // weight: "100 900",
  subsets: ["latin"],weight: ["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
