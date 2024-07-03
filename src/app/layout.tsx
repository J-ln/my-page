import type { Metadata } from "next";
import { Jost, Roboto_Flex } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/Background/StarsBackground";
import NavBar from "@/components/NavBar/NavBar";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "JR.",
  description: "JR. Frontend Designer & Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <body className={jost.variable + " " + roboto.variable}>
        <StarsCanvas />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
