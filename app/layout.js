"use client";
import {useState, useEffect} from "react";
import {Inconsolata} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ui/theme-provider";
import MyFooter from "@/components/MyFooter";
import Header from "@/components/Header";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import Loader from "@/components/Loading";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({children}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a minimum loading time for visibility
    const timer = setTimeout(() => setIsLoading(false), 4000); // 1 second delay

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en" suppressHydrationWarning>
        <body className={inconsolata.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Header />
                <main className="min-h-screen">{children}</main>
                <MyFooter />
              </>
            )}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
