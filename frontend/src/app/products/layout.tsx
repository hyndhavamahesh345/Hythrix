import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | HYTHRIX - Proprietary Systems & LeadFlow",
  description:
    "Discover proprietary software products engineered by HYTHRIX, including HYTHRIX LeadFlow—the automated real estate qualification and dispatch pipeline.",
  openGraph: {
    title: "Products | HYTHRIX - Proprietary Systems & LeadFlow",
    description:
      "Discover proprietary software products engineered by HYTHRIX, including HYTHRIX LeadFlow—the automated real estate qualification and dispatch pipeline.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
