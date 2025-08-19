import type { Metadata } from "next";
import "./globals.css";
import ProgressBar from "@/components/ui/progressbar";

export const metadata: Metadata = {
  title: "Kultibado",
  description: "Order website for Kultibado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
