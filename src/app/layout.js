import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import { store } from "./GlobalRedux/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Random Quote Machine</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers store={store}>
        {children}
        </Providers>
      </body>
    </html>
  );
}