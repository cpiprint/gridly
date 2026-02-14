# Gridly — Master Plan

> **The AI-native SaaS starter kit.** Auth, payments, background jobs, and AI — all wired up. Built by a 15-year-old developer from India.

---

## What Is Gridly?

A Next.js SaaS starter kit that saves developers 40+ hours of boilerplate. Clone → edit `config.ts` → deploy. The buyer gets:

- ✅ Auth (Better Auth — GitHub, Google, Discord)
- ✅ Payments (Stripe Checkout + Customer Portal)
- ✅ Dashboard (Sidebar, settings, user profile)
- ✅ AI scaffold (Vercel AI SDK — chatbot pattern)
- ✅ Background jobs (Inngest — cron, queues, workflows)
- ✅ Email (Resend — welcome, billing, transactional)
- ✅ Database (Prisma + PostgreSQL)
- ✅ API layer (tRPC — type-safe end-to-end)
- ✅ Config-driven — ONE file controls the whole app

---

## The Config-Driven Philosophy

This is the core selling point. The buyer never digs through component files. They edit `config.ts` and the entire app updates — branding, auth providers, Stripe plans, landing page content, sidebar nav, everything.

```
Buyer experience:
1. Clone repo
2. Open config.ts
3. Change app name, Stripe keys, colors, content
4. npx prisma migrate dev
5. npm run dev → deploy to Vercel
6. Live SaaS in 5 minutes
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full config schema and how components consume it.

---

## Current Status

| Layer | Status | Notes |
|-------|--------|-------|
| Landing page | ✅ Done | Header, Hero, Features, Pricing, FAQ, Footer |
| Auth UI | ✅ Done | Sign-in page with social buttons |
| Theme system | ✅ Done | Light/dark toggle |
| Better Auth config | ⚠️ Partial | Client config exists, server `auth.ts` is empty |
| Prisma schema | 🔴 Empty | No models — needs Better Auth tables |
| Auth wiring | 🔴 Not done | Buttons don't call signIn yet |
| Dashboard | 🔴 Not started | Sidebar component installed |
| Stripe | 🔴 Not started | |
| tRPC | 🔴 Not started | |
| AI (Vercel AI SDK) | 🔴 Not started | |
| Inngest | 🔴 Not started | |
| Email (Resend) | 🔴 Not started | |
| Config system | 🔴 Not started | |
| Docs / README | 🔴 Not started | |
| Demo site | 🔴 Not started | |

---

## Build Phases

### Phase 1 — Foundation (Days 1–3)
**Goal:** Auth works. Dashboard exists. App is functional.

- [ ] Create `config.ts` with TypeScript types — the config-driven system comes FIRST
- [ ] Refactor all existing components to read from config (Header, Hero, Features, Pricing, FAQ, Footer, metadata)
- [ ] Set up Prisma schema with Better Auth models (User, Session, Account, Verification)
- [ ] Complete `lib/auth.ts` server config
- [ ] Wire sign-in buttons to `authClient.signIn.social()`
- [ ] Build `(marketing)` and `(dashboard)` route groups
- [ ] Build AppSidebar (reads nav items from config)
- [ ] Build dashboard header (SidebarTrigger + breadcrumb + ModeToggle)
- [ ] Build dashboard home page (placeholder cards)
- [ ] Build settings page (real user data from session)
- [ ] Auth middleware — protect `/dashboard/*`, redirect to `/sign-in`
- [ ] Sign-out flow

### Phase 2 — Money Features (Days 4–7)
**Goal:** Stripe works. tRPC exists. Email sends.

- [ ] Stripe integration: Checkout Session API route
- [ ] Connect Pricing config → real Stripe checkout
- [ ] Webhook handler (`checkout.session.completed`)
- [ ] Store subscription status in DB (Prisma)
- [ ] Customer Portal (manage billing)
- [ ] Gate features by plan (free vs paid)
- [ ] Billing section in settings page
- [ ] tRPC base setup: router, context, auth middleware
- [ ] Example procedures: `getUser`, `getSubscription`
- [ ] Resend email setup: welcome email on sign-up

### Phase 3 — AI + Inngest (Days 8–10)
**Goal:** The differentiator. No starter at $29 has this.

- [ ] Vercel AI SDK integration
- [ ] AI chat page in dashboard (example implementation)
- [ ] AI tool calling scaffold (show how to add custom tools)
- [ ] Inngest setup and dev server
- [ ] Example cron job (e.g., daily digest, cleanup old sessions)
- [ ] Example event-driven workflow (e.g., on sign-up → send welcome email → create default data)
- [ ] Background job dashboard page (list recent jobs/status)

### Phase 4 — Polish & Docs (Days 11–14)
**Goal:** Buyable. Deployable. Documented.

- [ ] Comprehensive README with setup guide
- [ ] "How to add your first feature" guide
- [ ] Architecture overview doc
- [ ] Deploy live demo on Vercel
- [ ] Landing page polish: add demo link, tech stack section, "Built by" section
- [ ] OG image, proper SEO meta tags
- [ ] Error boundaries + loading skeletons throughout
- [ ] `robots.txt`, `sitemap.xml`

### Phase 5 — Launch (Days 15–17)
**Goal:** First sales.

- [ ] Set up Lemon Squeezy store
- [ ] Launch price: **$19** (raise to $29 after 50 sales)
- [ ] Launch tweet thread with screen recordings
- [ ] Post on r/nextjs, r/SideProject, Indie Hackers
- [ ] Product Hunt launch (optional — can save for v2)

---

## Pricing Strategy

| Stage | Price | When |
|-------|-------|------|
| Launch | $19 | Day 1 — first 50 sales or 2 weeks |
| Regular | $29 | After traction |
| Premium | $49 | After 100+ sales + testimonials + extras |

---

## Competitive Landscape

| Starter | Price | Stack | Has AI? | Has Inngest? |
|---------|-------|-------|---------|-------------|
| ShipFast | $199 | Next.js, NextAuth, Mongoose | ❌ | ❌ |
| Supastarter | $299 | Next.js, Supabase | ❌ | ❌ |
| Next SaaS Stripe | Free | Next.js, Clerk, Stripe | ❌ | ❌ |
| **Gridly** | **$19–29** | **Next.js, Better Auth, Prisma** | **✅ Vercel AI SDK** | **✅ Inngest** |

---

## The Hook

> **"The AI-native SaaS starter."**
> Auth, payments, AI, and background jobs — all config-driven. $19.

Not "yet another Next.js boilerplate." This is the starter for people building AI products, and it has cron jobs and event workflows built in. Nobody else at this price point offers that.

---

## What NOT to Build Before Launch

- ❌ Admin panel
- ❌ Team/org/multi-tenant support
- ❌ i18n / internationalization
- ❌ Multiple database adapters
- ❌ Mobile app
- ❌ Perfect code

Ship it. Fix it later. Add those as v2/v3 features and raise the price.
