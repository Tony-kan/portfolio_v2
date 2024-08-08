import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrains_Mono = JetBrains_Mono({ subsets: ["latin"],weight:['100','200','300','400','500','600','700','800'],variable:'--font-jetbrainsMono' });

export const metadata = {
  title: "Portofolio V2",
  description: "Version 2 of programmer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      <body className={jetbrains_Mono.variable}>{children}</body>
    </html>
  );
}
