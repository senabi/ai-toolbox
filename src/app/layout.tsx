import "@/styles/globals.css";

import LocalFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ServerProviders } from "./server-providers";

const fontSatoshi = LocalFont({
  src: [
    {
      path: "../styles/Satoshi-Variable.ttf",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../styles/Satoshi-VariableItalic.ttf",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${fontSatoshi.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <ServerProviders>{children}</ServerProviders>
      </body>
    </html>
  );
}
