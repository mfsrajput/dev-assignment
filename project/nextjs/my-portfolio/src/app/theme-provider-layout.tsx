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
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false); // Hydration is complete
  }, []);

  return (
    <div className={`${inter.className} ${isSSR ? "ssr-loading" : ""}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
}
