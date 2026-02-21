import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

// Plans (Polar product mapping)
export type Plan = {
  name: string;
  description: string;
  price: number; // monthly price in USD, 0 = free
  billingPeriod: "month" | "one_time";
  slug: string;
  productId: string; // Polar product ID
  features: string[];
  cta: string;
  highlighted?: boolean; // "Most popular" badge
};

// ─── Dashboard ───────────────────────────────────────
export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

// ─── Landing Page ────────────────────────────────────
export type Feature = {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
};

export type TechStackItem = {
  icon: ComponentType<{ size: string }>;
  title: string;
  description: string;
};

export type ComparisonRow = {
  feature: string;
  values: [boolean | string, boolean | string, ...(boolean | string)[]];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type LegalSection = {
  title: string;
  body: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};
