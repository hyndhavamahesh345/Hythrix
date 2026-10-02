import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding Team & Leadership | HYTHRIX",
  description:
    "Meet the founding team behind HYTHRIX: Nirjogi Hyndhava Mahesh (Co-Founder & CEO), Thrishith Reddy Vootkur (Co-Founder & COO), and Sruthika Reddy Yedulla (Co-Founder & CTO).",
  openGraph: {
    title: "Founding Team & Leadership | HYTHRIX",
    description:
      "Meet the founding team behind HYTHRIX: Nirjogi Hyndhava Mahesh (Co-Founder & CEO), Thrishith Reddy Vootkur (Co-Founder & COO), and Sruthika Reddy Yedulla (Co-Founder & CTO).",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
