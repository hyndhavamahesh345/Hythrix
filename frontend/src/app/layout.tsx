import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "HYTHRIX | Build. Automate. Grow.",
  description:
    "HYTHRIX builds digital products, AI voice agents, autonomous systems, business automation and growth solutions for modern businesses.",
  keywords: [
    "HYTHRIX",
    "digital products",
    "AI voice agents",
    "conversational voice AI",
    "AI solutions",
    "business automation",
    "growth systems",
    "web development",
    "AI agents",
    "autonomous phone agents",
    "technology agency",
    "BUILD AUTOMATE GROW",
    "Next.js development",
    "SaaS engineering",
  ],
  authors: [{ name: "HYTHRIX" }],
  creator: "HYTHRIX",
  metadataBase: new URL("https://hythrix.com"),
  openGraph: {
    title: "HYTHRIX | Build. Automate. Grow.",
    description:
      "HYTHRIX builds digital products, AI voice agents, autonomous systems, business automation and growth solutions for modern businesses.",
    url: "https://hythrix.com",
    siteName: "HYTHRIX",
    images: [
      {
        url: "/logo-dark.png",
        width: 1024,
        height: 341,
        alt: "HYTHRIX - Build. Automate. Grow.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HYTHRIX | Build. Automate. Grow.",
    description:
      "HYTHRIX builds digital products, AI-powered systems, business automation and growth solutions for modern businesses.",
    images: ["/logo-dark.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "4dIxdfK3kqzxUScnB1wuZYoPEEC2cVzSODH60xRvrvk",
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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] text-slate-900">
        {children}
      </body>
    </html>
  );
}
