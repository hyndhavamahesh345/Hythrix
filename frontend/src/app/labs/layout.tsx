import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYTHRIX Labs — Coming Soon",
  description:
    "HYTHRIX Labs: proprietary digital products, automated workflows, and software solutions currently in development.",
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
