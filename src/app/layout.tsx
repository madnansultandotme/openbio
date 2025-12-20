import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenBio | Open-source link-in-bio builder",
  description: "OpenBio is the self-hosted link-in-bio project by madnansultandotme.",
  metadataBase: new URL("https://github.com/madnansultandotme/openbio"),
  openGraph: {
    title: "OpenBio | Open-source link-in-bio builder",
    description: "OpenBio is the self-hosted link-in-bio project by madnansultandotme.",
    url: "https://github.com/madnansultandotme/openbio",
    siteName: "OpenBio",
    emails: ["info.adnansultan@gmail.com"],
  },
  alternates: {
    canonical: "https://github.com/madnansultandotme/openbio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
