import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/navigation";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Footer } from "@/components/footer";

import "./globals.css";
import { JraiTextilePattern } from "@/components/jrai-textile-pattern";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Digital Museum - Interactive Exhibits",
  description:
    "Immersive digital museum experience with interactive 3D artifacts and motion storytelling",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} font-sans antialiased bg-background text-foreground relative`}
      >
        {/* Jrai Cultural Textile Pattern Background */}
        <JraiTextilePattern className="fixed inset-0 z-0" opacity={0.16} />

        <div className="relative z-10">
          <Navigation />
          <div className="pt-16">
            <LayoutWrapper>{children}</LayoutWrapper>
          </div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
