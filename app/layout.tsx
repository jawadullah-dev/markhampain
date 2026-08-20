import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBookButton } from "@/components/layout/MobileBookButton";
import { clinic } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markhampain.com"),
  title: {
    default: `${clinic.name}`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Markham Pain Clinic offers chiropractic care, acupuncture, massage therapy and custom orthotics in Markham, Ontario — helping you move with ease.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: clinic.name,
    title: clinic.name,
    description:
      "Chiropractic, acupuncture, massage therapy and orthotics in Markham, ON. Book your complimentary consultation today.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-charcoal antialiased">
        <Header />
        <main className="page-fade-in pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileBookButton />
      </body>
    </html>
  );
}
