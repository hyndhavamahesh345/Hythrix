import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Capabilities & Labs | HYTHRIX",
  description:
    "Explore upcoming digital products, automated workflows, and software solutions currently in development at HYTHRIX.",
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
