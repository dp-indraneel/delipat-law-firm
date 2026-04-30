import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delipat | Intake Management for PI Firms",
  description: "Done-for-you intake management for personal injury firms losing cases to slow response and inconsistent follow-up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#FAFAFA] font-body">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
