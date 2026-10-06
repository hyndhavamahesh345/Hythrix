import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | HYTHRIX",
  description:
    "Meet the leadership team behind HYTHRIX: Y Sruthika Reddy (CEO), N Hyndhava Mahesh (CTO), and V Thrishith Reddy (COO).",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
