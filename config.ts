import {
  HandshakeIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  ZapIcon,
} from "lucide-react";
import type { RadiusName, ThemeName } from "./lib/theme-presets";
import {
  BetterAuth,
  BrandNextjs,
  BrandTrpc,
  BrandTypeScript,
  InngestIcon,
  StripeIcon,
} from "./public";
import type {
  ComparisonRow,
  FAQItem,
  Feature,
  FooterLink,
  NavItem,
  Plan,
  TechStackItem,
} from "./types/config";
export type {
  ComparisonRow,
  FAQItem,
  Feature,
  FooterLink,
  NavItem,
  Plan,
  TechStackItem,
};

// ─── App ─────────────────────────────────────────────
export const appConfig = {
  name: "Gridly",
  description: "The AI-native SaaS starter kit.",
  url: "https://gridly.akoder.xyz",
  creator: {
    name: "Aditya",
    url: "https://akoder.xyz",
  },

  // Change this to recolor the entire app.
  // Options: "orange" | "blue" | "violet" | "rose" | "emerald" | "amber"
  theme: "orange" as ThemeName,

  // Change this to adjust corner roundness globally.
  // Options: "sm" | "md" | "lg" | "xl"| " "(for rounded-none )
  radius: "sm" as RadiusName,
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

// ─── Stripe / Plans ──────────────────────────────────
// SaaS subscription plans — shown on landing page pricing section
// and used for Stripe checkout.
export const plansConfig: Plan[] = [
  {
    name: "Free",
    description: "For side projects",
    price: 0,
    priceId: "",
    cta: "Get Started",
    features: ["1 project", "Basic AI", "Community support"],
  },
  {
    name: "Pro",
    description: "For serious builders",
    price: 19,
    priceId: "price_xxx", // buyer replaces with their Stripe Price ID
    cta: "Upgrade to Pro",
    features: [
      "Unlimited projects",
      "Advanced AI",
      "Priority support",
      "Custom domain",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    description: "For growing teams",
    price: 49,
    priceId: "price_yyy",
    cta: "Contact Sales",
    features: ["Everything in Pro", "Team members", "Admin dashboard", "SLA"],
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
      icon: StripeIcon,
      title: "Stripe",
      description:
        "Stripe Checkout, Customer Portal, and webhooks pre-configured. Start charging in minutes.",
    },
    {
      icon: BetterAuth,
      title: "Better Auth",
      description:
        "GitHub, Google, Discord — pre-wired with Better Auth. Secure sessions out of the box.",
    },
    {
      icon: InngestIcon,
      title: "Inngest",
      description:
        "Background jobs, cron jobs, and event-driven workflows. No infra to manage.",
    },
  ] satisfies TechStackItem[],

  comparison: {
    productName: "GRIDLY",
    competitors: ["ShipFast", "Others"],
    rows: [
      {
        feature: "Price",
        values: ["$19", "$199", "$99–299"],
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
        feature: "Stripe Payments",
        values: [true, true, true],
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
        feature: "Background Jobs (Inngest)",
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
      question: "What is included in the boilerplate?",
      answer:
        "A complete Next.js 15+ foundation with Better Auth, Prisma, PostgreSQL, Stripe integration, Resend for emails, and a clean feature-based architecture. Everything you need to go from idea to launch.",
    },
    {
      question: "Can I use this for client projects?",
      answer:
        "Yes! Once you purchase the starter, you can use it for as many projects as you like. It's a one-time purchase for lifetime usage.",
    },
    {
      question: "Do I get lifetime updates?",
      answer:
        "Absolutely. You'll have access to all future updates, security patches, and new features we add to the boilerplate at no extra cost.",
    },
    {
      question: "Is the code well-documented?",
      answer:
        "Yes, we provide clear documentation for setup, environment variables, database migrations, and Stripe configuration to ensure you're never stuck.",
    },
    {
      question: "What if I need help during setup?",
      answer:
        "We provide priority email support for all customers. If you run into any technical issues during setup, we're here to help you get unstuck.",
    },
  ] satisfies FAQItem[],

  footer: {
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ] satisfies FooterLink[],
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
    { title: "AI Chat", url: "/ai", icon: MessageSquareIcon },
    { title: "Settings", url: "/settings", icon: SettingsIcon },
  ] satisfies NavItem[],
};
