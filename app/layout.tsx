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
  metadataBase: new URL("https://intake.delipat.com"),
  title: {
    default: "Delipat | PI Firm Intake Systems",
    template: "%s | Delipat",
  },
  description:
    "Delipat helps personal injury firms fix missed calls, slow follow-up, and intake leaks so more paid leads turn into signed cases.",
  applicationName: "Delipat",
  keywords: [
    "personal injury intake",
    "law firm intake system",
    "PI firm CRM",
    "legal intake automation",
    "law firm lead follow up",
    "case intake diagnostic",
  ],
  authors: [{ name: "Delipat", url: "https://intake.delipat.com" }],
  creator: "Delipat",
  publisher: "Delipat",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Delipat | PI Firm Intake Systems",
    description:
      "Find where your PI firm's intake is leaking and build faster response, follow-up, pipeline visibility, and reporting.",
    url: "/",
    siteName: "Delipat",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Delipat intake systems for PI firms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delipat | PI Firm Intake Systems",
    description:
      "Fix missed calls, slow follow-up, and reporting gaps before they cost your PI firm signed cases.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Legal technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#ffffff] font-body">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
