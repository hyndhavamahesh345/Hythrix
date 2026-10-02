import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Console Access | HYTHRIX",
  description: "Sign in or create an account to access the HYTHRIX Real Estate Automation Console.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
