import Link from "next/link";
import { appConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "8rem",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          opacity: 0.15,
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        404
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          fontWeight: 500,
          color: "hsl(var(--foreground))",
          marginTop: "-0.5rem",
        }}
      >
        This page doesn&apos;t exist.
      </p>

      <p
        style={{
          fontSize: "0.925rem",
          color: "hsl(var(--muted-foreground))",
          maxWidth: "24rem",
        }}
      >
        The page you&apos;re looking for may have been moved or no longer
        exists.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1rem",
          padding: "0.625rem 1.5rem",
          fontSize: "0.875rem",
          fontWeight: 500,
          borderRadius: "var(--radius)",
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          textDecoration: "none",
          transition: "opacity 0.15s",
        }}
      >
        Back to {appConfig.name}
      </Link>
    </div>
  );
}
