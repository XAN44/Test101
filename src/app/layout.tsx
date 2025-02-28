// layout.tsx
import type { Metadata } from "next";
import { Lora, Sarabun, Mitr, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Providers } from "./nextuiProvider";
import Sidebar from "./sidebar/page";
import Searchbar from "./components/searchBar/searchbar";

export const metadata: Metadata = {
  title: "TEST101",
  description: "Generated by create next app",
};

const inter = Chakra_Petch({
  subsets: ["latin", "thai"],
  display: "swap",
  weight: "300",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="scroll-smooth antialiased min-h-screen w-full max-w-full text-white overflow-auto bg-black pb-24">
        <div className="relative">
          <Providers>
            <main className="text-white z-10 pt-16">
              <Sidebar />
              <Searchbar />
              {children}
            </main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
