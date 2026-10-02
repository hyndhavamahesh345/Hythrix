import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYTHRIX Labs | Experimental R&D, AI Prototypes & Scalable Architectures",
  description:
    "Explore HYTHRIX Labs: internal experimental engineering, multi-agent AI consensus loops, real-time edge state streaming, and next-generation systems.",
  openGraph: {
    title: "HYTHRIX Labs | Experimental R&D & AI Systems",
    description:
      "Explore HYTHRIX Labs: internal experimental engineering, multi-agent AI consensus loops, real-time edge state streaming, and next-generation systems.",
  },
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
