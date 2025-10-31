import type { Metadata } from "next";
import { Raleway, Libre_Baskerville } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const ralewaySans = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
});

const libreSerif = Libre_Baskerville({
  weight: "400",
  variable: "--font-header",
});

export const metadata: Metadata = {
  title: "Epik Partners Hukuk",
  description: "En etkili çözümleri sunar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
