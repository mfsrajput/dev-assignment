"use client"; // Marking the file as a client component

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"; // Import your custom ThemeProvider
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ThemeProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 // State to track whether the component is mounted (hydrated)
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
   // Set to true once the component is mounted
   setIsMounted(true);
 }, []);

 // If not mounted, don't render children to avoid hydration issues
 if (!isMounted) return null;


  return (
    <div className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem = {true}
        disableTransitionOnChange= {true}
      >
        {children}
      </ThemeProvider>
    </div>
  );
}
