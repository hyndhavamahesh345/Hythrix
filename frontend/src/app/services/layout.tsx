import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | HYTHRIX - Digital Products, AI & Automation",
  description:
    "Explore HYTHRIX engineering disciplines: Full-stack web applications, SaaS platforms, autonomous AI agents, workflow automation, and digital growth engines.",
  openGraph: {
    title: "Services | HYTHRIX - Digital Products, AI & Automation",
    description:
      "Explore HYTHRIX engineering disciplines: Full-stack web applications, SaaS platforms, autonomous AI agents, workflow automation, and digital growth engines.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
