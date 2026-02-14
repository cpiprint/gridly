# Gridly — Architecture & Config System

## Folder Structure (Target)

```
saas-starter/
├── app/
│   ├── (marketing)/              # Public pages — NO sidebar
│   │   ├── layout.tsx            # Pass-through layout
│   │   └── page.tsx              # Landing page (reads from config)
│   ├── (dashboard)/              # Authenticated pages — HAS sidebar
│   │   ├── layout.tsx            # SidebarProvider + auth guard
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard home
│   │   ├── settings/
│   │   │   └── page.tsx          # User settings + billing
│   │   └── ai/
│   │       └── page.tsx          # AI chat scaffold
│   ├── api/
│   │   ├── auth/[...all]/route.ts  # Better Auth handler
│   │   ├── trpc/[trpc]/route.ts    # tRPC handler
│   │   ├── stripe/webhook/route.ts # Stripe webhook
│   │   └── inngest/route.ts        # Inngest handler
│   ├── sign-in/
│   │   └── page.tsx
│   ├── layout.tsx                # Root (fonts, ThemeProvider, TooltipProvider)
│   └── globals.css
│
├── config.ts                     # ⭐ THE config file — buyer edits this
│
├── components/
│   ├── ui/                       # Shadcn components (don't touch)
│   ├── mode-toggle.tsx           # Theme switcher
│   └── theme-provider.tsx        # next-themes wrapper
│
├── features/
│   ├── landing/                  # Landing page sections (read from config)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── dashboard/                # Dashboard components
│   │   ├── app-sidebar.tsx       # Main sidebar (reads nav from config)
│   │   └── dashboard-header.tsx  # Top bar (trigger + breadcrumb + theme)
│   ├── auth/                     # Auth UI
│   │   ├── auth.tsx
│   │   └── signin.tsx
│   └── ai/                       # AI chat components
│       ├── chat.tsx
│       └── message.tsx
│
├── server/
│   ├── trpc/                     # tRPC setup
│   │   ├── index.ts              # Router + context
│   │   ├── routers/
│   │   │   ├── user.ts
│   │   │   └── subscription.ts
│   │   └── middleware/
│   │       └── auth.ts           # protectedProcedure
│   └── inngest/                  # Background jobs
│       ├── client.ts             # Inngest client
│       └── functions/
│           ├── welcome-email.ts
│           └── daily-cleanup.ts
│
├── lib/
│   ├── auth.ts                   # Better Auth server config
│   ├── auth-client.tsx           # Better Auth client
│   ├── db.ts                     # Prisma client
│   ├── stripe.ts                 # Stripe client
│   ├── resend.ts                 # Resend client
│   └── utils.ts
│
├── prisma/
│   └── schema.prisma             # User, Session, Account, Verification, Subscription
│
├── middleware.ts                  # Auth route protection
├── plans/                         # You are here
│   ├── README.md
│   └── ARCHITECTURE.md
└── package.json
```

---

## The Config File

The buyer edits this single file. Every component reads from it.

```ts
// config.ts

import {
  ZapIcon, RocketIcon, TrendingUpIcon, ShieldIcon,
  CreditCardIcon, BotIcon, ClockIcon, MailIcon,
  LayoutDashboardIcon, SettingsIcon, MessageSquareIcon,
  type LucideIcon,
} from "lucide-react";

// ─── App ─────────────────────────────────────────────
export const appConfig = {
  name: "Gridly",
  description: "The AI-native SaaS starter kit.",
  url: "https://gridly.akoder.xyz",
  creator: {
    name: "Aditya",
    url: "https://akoder.xyz",
  },
} as const;

// ─── Auth ────────────────────────────────────────────
// Only controls which buttons appear on the sign-in page.
// Actual provider secrets are in .env
export const authConfig = {
  providers: ["github", "google"] as const,
  redirectAfterSignIn: "/dashboard",
  redirectAfterSignOut: "/",
} as const;

// ─── Stripe / Plans ──────────────────────────────────
export type Plan = {
  name: string;
  description: string;
  price: number;              // monthly price in USD, 0 = free
  priceId: string;            // Stripe Price ID (from .env or Stripe dashboard)
  features: string[];
  highlighted?: boolean;      // "Most popular" badge
};

export const plansConfig: Plan[] = [
  {
    name: "Free",
    description: "For side projects",
    price: 0,
    priceId: "",
    features: ["1 project", "Basic AI", "Community support"],
  },
  {
    name: "Pro",
    description: "For serious builders",
    price: 19,
    priceId: "price_xxx",     // buyer replaces with their Stripe Price ID
    features: ["Unlimited projects", "Advanced AI", "Priority support", "Custom domain"],
    highlighted: true,
  },
  {
    name: "Team",
    description: "For growing teams",
    price: 49,
    priceId: "price_yyy",
    features: ["Everything in Pro", "Team members", "Admin dashboard", "SLA"],
  },
];

// ─── Landing Page ────────────────────────────────────
export const landingConfig = {
  hero: {
    title: "Build. Ship. Scale.",
    subtitle: "The AI-native SaaS starter. Auth, payments, AI, and background jobs — all config-driven.",
    cta: "Start shipping today",
  },
  features: [
    {
      icon: ShieldIcon,
      title: "Authentication",
      description: "GitHub, Google, Discord — pre-wired with Better Auth.",
    },
    {
      icon: CreditCardIcon,
      title: "Payments",
      description: "Stripe Checkout, Customer Portal, webhooks — all set up.",
    },
    {
      icon: BotIcon,
      title: "AI Ready",
      description: "Vercel AI SDK with tool calling scaffold. Build your AI feature in minutes.",
    },
    {
      icon: ClockIcon,
      title: "Background Jobs",
      description: "Inngest for cron jobs, event-driven workflows, and queues.",
    },
    {
      icon: MailIcon,
      title: "Transactional Email",
      description: "Resend integration for welcome, billing, and notification emails.",
    },
    {
      icon: RocketIcon,
      title: "Ship Fast",
      description: "One config file. Clone → edit → deploy. Live in 5 minutes.",
    },
  ] satisfies { icon: LucideIcon; title: string; description: string }[],

  faq: [
    {
      question: "What tech stack does Gridly use?",
      answer: "Next.js 16, Better Auth, Prisma + PostgreSQL, tRPC, Stripe, Vercel AI SDK, Inngest, Resend.",
    },
    {
      question: "Do I need to know all these tools?",
      answer: "No. Everything is pre-configured. Edit config.ts, set your env vars, and deploy.",
    },
    {
      question: "Can I use a different database?",
      answer: "Gridly is built for PostgreSQL (Neon, Supabase, etc). Prisma supports others but we haven't tested them.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes — 7-day money-back guarantee, no questions asked.",
    },
  ],
};

// ─── Dashboard ───────────────────────────────────────
export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export const dashboardConfig = {
  nav: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
    { title: "AI Chat", url: "/ai", icon: MessageSquareIcon },
    { title: "Settings", url: "/settings", icon: SettingsIcon },
  ] satisfies NavItem[],
};
```

---

## How Components Consume Config

Every component imports what it needs from `config.ts`. No hardcoded strings.

### Example: Hero.tsx (before → after)

```tsx
// BEFORE — hardcoded
export const Hero = () => (
  <h1>Build. Ship. Scale.</h1>
  <p>The AI-native SaaS starter...</p>
  <Button>Start shipping today</Button>
);

// AFTER — config-driven
import { landingConfig, appConfig } from "@/config";

export const Hero = () => (
  <h1>{landingConfig.hero.title}</h1>
  <p>{landingConfig.hero.subtitle}</p>
  <Button>{landingConfig.hero.cta}</Button>
);
```

### Example: Pricing.tsx

```tsx
import { plansConfig } from "@/config";

export default function Pricing() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plansConfig.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}
```

### Example: AppSidebar

```tsx
import { dashboardConfig, appConfig } from "@/config";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <span className="font-doto">{appConfig.name.toUpperCase()}</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {dashboardConfig.nav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
```

### Example: metadata in layout.tsx

```tsx
import { appConfig } from "@/config";

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  metadataBase: new URL(appConfig.url),
  authors: [{ name: appConfig.creator.name, url: appConfig.creator.url }],
  // ...
};
```

---

## Auth Flow

```
User clicks "Sign in with GitHub"
  → authClient.signIn.social({ provider: "github" })
  → Better Auth redirects to GitHub
  → GitHub callback → Better Auth creates session
  → Redirect to authConfig.redirectAfterSignIn ("/dashboard")
  → Middleware checks session → allows access
  → Dashboard renders with user data from session
```

---

## Stripe Flow

```
User clicks "Get Pro" on Pricing page
  → POST /api/stripe/checkout { priceId: plan.priceId }
  → Create Stripe Checkout Session
  → Redirect to Stripe hosted checkout
  → User pays → Stripe webhook fires
  → POST /api/stripe/webhook → checkout.session.completed
  → Update user's subscription in DB
  → User returns to /dashboard → now has "Pro" access
```

---

## Inngest Flow

```
User signs up
  → Better Auth creates user
  → App sends Inngest event: "user/signed-up"
  → Inngest function triggers:
      1. Send welcome email via Resend
      2. Create default project/data
      3. Track analytics event

Daily cron (configured in Inngest):
  → Clean up expired sessions
  → Send weekly digest emails
```

---

## Environment Variables

The buyer sets these in `.env`:

```env
# Database
DATABASE_URL="postgresql://..."

# Better Auth
BETTER_AUTH_SECRET="random-secret"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth (only the ones they want)
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Stripe
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""

# Resend
RESEND_API_KEY=""

# Inngest
INNGEST_EVENT_KEY=""
INNGEST_SIGNING_KEY=""
```

---

## Build Order (Important)

The config system must come **first** because everything else depends on it:

1. **`config.ts`** — create the file with types
2. **Refactor existing components** — make them read from config
3. **Auth wiring** — uses `authConfig`
4. **Dashboard** — uses `dashboardConfig`
5. **Stripe** — uses `plansConfig`
6. **AI + Inngest** — standalone but reads app name from config
7. **Docs** — documents the config system
