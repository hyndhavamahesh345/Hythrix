"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
}

export default function BrandLogo({
  size = "md",
  variant = "light",
  className = "",
}: BrandLogoProps) {
  const dimensions = {
    sm: { width: 124, height: 29, hClass: "h-7" },
    md: { width: 148, height: 35, hClass: "h-8.5" },
    lg: { width: 180, height: 42, hClass: "h-10" },
  }[size];

  const logoSrc =
    variant === "dark"
      ? "/logo-transparent-dark.png"
      : "/logo-transparent-light.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none select-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="HYTHRIX Home"
    >
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="HYTHRIX"
          width={dimensions.width}
          height={dimensions.height}
          className={`${dimensions.hClass} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
          priority
        />
      </div>
    </Link>
  );
}
