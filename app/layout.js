import {Inconsolata} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ui/theme-provider";
import MyFooter from "@/components/MyFooter";
import Header from "@/components/Header";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "CareerGPT",
  description: "AI generated career coach.",
};

export default function RootLayout({children}) {
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
            {/* <header></header> */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <MyFooter />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
