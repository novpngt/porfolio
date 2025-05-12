import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import type React from "react";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nguyen Thanh Phong | Software Developer",
  description: "Portfolio of Nguyen Thanh Phong - Software Developer based in Ho Chi Minh, Vietnam",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
