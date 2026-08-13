import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "6G Fundamentals Tutorial",
    template: "%s | 6G Fundamentals Tutorial",
  },
  description:
    "A self-paced, plain-language tutorial for understanding 6G wireless concepts.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <body>
        <a className="skip-link" href="#module-content">
          Skip to module content
        </a>
        {children}
      </body>
    </html>
  );
}
