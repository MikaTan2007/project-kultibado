import type { Metadata } from "next";
import "./globals.css";
import ProgressBar from "@/components/ui/progressbar";
import Image from "next/image";
import {Toaster} from 'react-hot-toast';

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
        <div className="flex flex-col items-center pt-10">
            <Image 
                className = "w-auto h-auto"
                src = "/images/kultibado_text.png" 
                width = {400}
                height = {400}
                alt = "logo"
                priority={true}
            />
        </div>
        {children}
        <Toaster 
          position = "top-center"
          toastOptions={
            {
              duration: 3000
            }
          }
        />
      </body>
    </html>
  );
}
