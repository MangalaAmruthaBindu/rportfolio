// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Mangala AmruthaBindu rn-portfolio",
  description: "I am a software engineer with a passion of creating the applications and giving the chance for creative problem sloving",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ background: "#0a0014", color: "white" }}>
        <Loader/>
        {children}
      </body>
    </html>
  );
}