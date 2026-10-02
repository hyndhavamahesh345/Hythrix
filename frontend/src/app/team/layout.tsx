import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | HYTHRIX",
  description:
    "Meet the leadership team behind HYTHRIX: Nirjogi Hyndhava Mahesh (CEO), Thrishith Reddy Vootkur (COO), and Sruthika Reddy Yedulla (CTO).",
  openGraph: {
    title: "Leadership Team | HYTHRIX",
    description:
      "Meet the leadership team behind HYTHRIX: Nirjogi Hyndhava Mahesh (CEO), Thrishith Reddy Vootkur (COO), and Sruthika Reddy Yedulla (CTO).",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
