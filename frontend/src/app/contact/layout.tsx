import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | HYTHRIX - Let's Build Together",
  description:
    "Direct architect engagement with HYTHRIX. Inquire about custom web applications, SaaS platforms, AI integrations, or workflow automation with 24h response SLA.",
  openGraph: {
    title: "Contact | HYTHRIX - Let's Build Together",
    description:
      "Direct architect engagement with HYTHRIX. Inquire about custom web applications, SaaS platforms, AI integrations, or workflow automation with 24h response SLA.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
