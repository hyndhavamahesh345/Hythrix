import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | HYTHRIX - Digital Products, AI Voice Agents & Automation",
  description:
    "Explore HYTHRIX engineering disciplines: Full-stack web applications, SaaS platforms, conversational AI voice agents, autonomous workflows, and digital growth engines.",
  openGraph: {
    title: "Services | HYTHRIX - Digital Products, AI Voice Agents & Automation",
    description:
      "Explore HYTHRIX engineering disciplines: Full-stack web applications, SaaS platforms, conversational AI voice agents, autonomous workflows, and digital growth engines.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
