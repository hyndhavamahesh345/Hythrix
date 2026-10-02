import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | HYTHRIX",
  description:
    "Meet the leadership team behind HYTHRIX: N Hyndhava Mahesh (CEO), V Thrishith Reddy (COO), and Y Sruthika Reddy (CTO).",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
