import {
  BotIcon,
  HandshakeIcon,
  LayoutDashboardIcon,
  UserCog2Icon,
  ZapIcon,
} from "lucide-react";
import type { RadiusName, ThemeName } from "./lib/theme-presets";
import {
  BetterAuth,
  BrandNextjs,
  BrandTrpc,
  BrandTypeScript,
  PrismaIcon,
  PolarIcon,
} from "./public";
import type {
  ComparisonRow,
  FAQItem,
  Feature,
  FooterLink,
  LegalDocument,
  NavItem,
  Plan,
  TechStackItem,
} from "./types/config";
export type {
  ComparisonRow,
  FAQItem,
  Feature,
  FooterLink,
  LegalDocument,
  NavItem,
  Plan,
  TechStackItem,
};

// Global app metadata used by layouts, SEO, and branding UI.
export const appConfig = {
  name: "Gridly",
  description: "The AI-native SaaS starter kit.",
  url: "https://gridly.akoder.xyz",
  github: "https://github.com/AdityaKodez/gridly",
  creator: {
    name: "Aditya",
    url: "https://akoder.xyz",
  },

  // Change this to recolor the entire app.
  // Options: "orange" | "blue" | "violet" | "rose" | "emerald" | "amber"
  theme: "orange" as ThemeName,

  // Change this to adjust corner roundness globally.
  // Options: "sm" | "md" | "lg" | "xl"| " "(for rounded-none )
  radius: "lg" as RadiusName,
} as const;

// ─── Auth ────────────────────────────────────────────
// Only controls which buttons appear on the sign-in page.
// Actual provider secrets are in .env
export const authConfig = {
  marketing: {
    titleIcon: ZapIcon,
    headline: "BUILD YOUR NEXT IDEA IN MINUTES",
    description:
      "Auth, database, payments, and clean architecture — all set up and ready for you.",
  },
  auth: {
    title: "Welcome Back",
    subtitle: "Sign in to start building your next idea",
    titleIcon: HandshakeIcon,
    providers: ["github", "google", "discord"] as const,
    redirectAfterSignIn: "/dashboard",
    redirectAfterSignOut: "/",
  },
} as const;

// Plans (Polar product mapping)
// Shown in pricing and used by Polar checkout.
export const plansConfig: Plan[] = [
  {
    name: "Free",
    description: "Code is Open Source",
    price: 0,
    billingPeriod: "one_time",
    slug: "one-time",
    // ⚠️  Replace this with your own Polar product ID (found in your Polar dashboard)
    productId: "f89b5bf6-bcac-419d-a853-bb633253407f",
    cta: "Get Started",
    features: ["Unlimited Projects", " AI Features", "Community support"],
  },
];

// ─── Landing Page ────────────────────────────────────
export const landingConfig = {
  hero: {
    titleAccent: "Production-ready",
    title: "Next.js SaaS boilerplate",
    subtitle:
      "Auth, database, payments, email, and clean architecture already set up. Start building real features immediately.",
    cta: "Start shipping today",
  },

  features: [
    {
      badge: "Authentication",
      title: "Secure login in minutes, not days",
      description:
        "Pre-configured social logins, email/password, and session management. Just add your provider keys and you're live.",
      bullets: [
        "Google, GitHub, Discord OAuth",
        "Secure session handling",
        "Protected routes & middleware",
      ],
    },
    {
      badge: "Payments",
      title: "Start charging from day one",
      description:
        "Stripe Checkout, subscription management, and webhooks are fully wired. Create plans in config and go.",
      bullets: [
        "Subscription & one-time payments",
        "Customer portal built in",
        "Webhook handlers ready",
      ],
    },
    {
      badge: "AI-Native",
      title: "Built for the AI era",
      description:
        "Vercel AI SDK integrated with streaming, tool calling, and chat UI. Ship AI features as fast as CRUD.",
      bullets: [
        "Streaming chat interface",
        "Tool calling framework",
        "Multi-provider support",
      ],
    },
  ] satisfies Feature[],

  techStack: [
    {
      icon: BrandNextjs,
      title: "Next.js 15",
      description:
        "App Router, Server Actions, and Partial Prerendering. The fastest way to build for the web.",
    },
    {
      icon: BrandTypeScript,
      title: "TypeScript",
      description:
        "First-class type safety across the entire stack. Catch bugs before they even happen.",
    },
    {
      icon: BrandTrpc,
      title: "tRPC",
      description:
        "End-to-end type safety for your API. No more manual type synchronization.",
    },
    {
      icon: PolarIcon,
      title: "Polar",
      description:
        "Checkout, customer portal, and webhook handling are pre-configured with Polar.",
    },
    {
      icon: BetterAuth,
      title: "Better Auth",
      description:
        "GitHub, Google, Discord — pre-wired with Better Auth. Secure sessions out of the box.",
    },
    {
      icon: PrismaIcon,
      title: "Prisma",
      description:
        "Type-safe database access with schema migrations for reliable production deployments.",
    },
  ] satisfies TechStackItem[],

  comparison: {
    productName: "GRIDLY",
    competitors: ["ShipFast", "Others"],
    rows: [
      {
        feature: "Price",
        values: ["$0 (Open Source)", "$199", "$99–$299"],
      },
      {
        feature: "Next.js App Router",
        values: [true, true, true],
      },
      {
        feature: "Authentication",
        values: [true, true, true],
      },
      {
        feature: "Polar Payments",
        values: [true, false, false],
      },
      {
        feature: "Database + ORM",
        values: [true, true, true],
      },
      {
        feature: "AI Chatbot Scaffold",
        values: [true, false, false],
      },
      {
        feature: "AI Tool Calling",
        values: [true, false, false],
      },
      {
        feature: "Config-Driven",
        values: [true, true, false],
      },
      {
        feature: "End-to-End Type Safety",
        values: [true, false, false],
      },
    ] satisfies ComparisonRow[],
  },

  faq: [
    {
      question: "Is this really 100% free and open-source?",
      answer:
        "Yes! Gridly is released under the MIT License. You can use it for personal projects, commercial client work, or your own SaaS startups completely for free.",
    },
    {
      question: "What is included in the boilerplate?",
      answer:
        "A complete Next.js 15+ foundation with Better Auth, Prisma, PostgreSQL, Polar integration, and the Vercel AI SDK. Everything you need to go from idea to launch without writing boilerplate.",
    },
    {
      question: "Can I use this for client projects?",
      answer:
        "Absolutely. Once you clone the starter, you can use it for as many client projects as you like without attribution.",
    },
    {
      question: "Is the code well-documented?",
      answer:
        "Yes, we provide clear documentation for setup, environment variables, database migrations, and authentication configuration in the repository's README.",
    },
    {
      question: "Why Polar instead of Stripe?",
      answer:
        "Polar is built specifically for developers, open-source maintainers, and modern SaaS companies. It handles subscriptions, products, and webhooks beautifully with a developer-first API.",
    },
  ] satisfies FAQItem[],

  footer: {
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ] satisfies FooterLink[],
  },
};

export const legalConfig: {
  terms: LegalDocument;
  privacy: LegalDocument;
} = {
  terms: {
    title: "Terms of Service",
    lastUpdated: "February 20, 2026",
    intro:
      "These terms govern your use of the service, including account responsibilities, acceptable use, and payment terms.",
    sections: [
      {
        title: "Account Use",
        body: [
          "You are responsible for maintaining the security of your account credentials.",
          "You must provide accurate account information and keep it up to date.",
        ],
      },
      {
        title: "Acceptable Use",
        body: [
          "Do not misuse the platform, including attempts to bypass security controls or disrupt service availability.",
          "You are responsible for content and actions performed through your account.",
        ],
      },
      {
        title: "Billing and Refunds",
        body: [
          "Paid features are billed according to the selected plan terms shown at checkout.",
          "Refund and cancellation terms are governed by the purchase flow and applicable payment provider policies.",
        ],
      },
      {
        title: "Service Changes",
        body: [
          "We may update features, pricing, or policies over time.",
          "Material changes to these terms will be reflected by updating the last updated date.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "February 20, 2026",
    intro:
      "This policy describes what information we collect, how we use it, and the choices available to you.",
    sections: [
      {
        title: "Information We Collect",
        body: [
          "We collect account details such as name, email, and profile metadata from your sign-in provider.",
          "We also collect operational telemetry needed to secure and improve the service.",
        ],
      },
      {
        title: "How We Use Data",
        body: [
          "We use data to authenticate users, deliver features, process payments, and provide customer support.",
          "We do not sell personal information.",
        ],
      },
      {
        title: "Data Retention",
        body: [
          "We retain information only as long as needed for service operations, legal obligations, and security requirements.",
          "You may request account deletion according to available product controls and applicable law.",
        ],
      },
      {
        title: "Contact",
        body: [
          "For privacy-related requests, contact the email listed in your business profile or support channel.",
        ],
      },
    ],
  },
};

// ─── Dashboard ───────────────────────────────────────
export const dashboardConfig = {
  sidebar: {
    width: "18.5rem",
    widthIcon: "3rem",
  },
  nav: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
    { title: "AI Chat", url: "/ai", icon: BotIcon },
    { title: "Settings", url: "/settings", icon: UserCog2Icon },
  ] satisfies NavItem[],
};
