import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "~/components/header/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Scout",
  description: "Private ranked matchmaking",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex-grow-1 overflow-auto font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
