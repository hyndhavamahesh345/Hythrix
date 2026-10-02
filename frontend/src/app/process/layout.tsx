import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | HYTHRIX - From Idea to Measurable Impact",
  description:
    "Learn about HYTHRIX's 5-step engineering lifecycle: Discover, Strategy, Design, Build, and Grow. Structured for rapid sprint cycles and production reliability.",
  openGraph: {
    title: "Process | HYTHRIX - From Idea to Measurable Impact",
    description:
      "Learn about HYTHRIX's 5-step engineering lifecycle: Discover, Strategy, Design, Build, and Grow. Structured for rapid sprint cycles and production reliability.",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
