"use client";

import {useState, useEffect} from "react";
import {Inconsolata} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ui/theme-provider";
import MyFooter from "@/components/MyFooter";
import Header from "@/components/Header";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import { Loading } from "@/components/Loading";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});


// Loading Screen Component
function LoadingScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <Loading/>
    </div>
  );
}

export default function RootLayout({children}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Simulate loading for 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inconsolata.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {loading ? (
              <LoadingScreen />
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
