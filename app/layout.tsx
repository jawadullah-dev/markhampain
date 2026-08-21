import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBookButton } from "@/components/layout/MobileBookButton";
import { clinic } from "@/lib/content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markhampain.com"),
  title: {
    default: clinic.name,
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-ink font-sans text-mist antialiased">
        <Header />
        <main className="page-fade-in pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileBookButton />
      </body>
    </html>
  );
}
