import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

// ─── Stripe / Plans ──────────────────────────────────
export type Plan = {
  name: string;
  description: string;
  price: number; // monthly price in USD, 0 = free
  priceId: string; // Stripe Price ID (from .env or Stripe dashboard)
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
  icon: ComponentType<{ size: number | string }>;
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
