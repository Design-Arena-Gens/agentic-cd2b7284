import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valorant Players from Tier 1 CS",
  description: "Valorant esports players who competed in tier 1 Counter-Strike competitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-valorant-darker text-white">
        {children}
      </body>
    </html>
  );
}
