# Gridly — AI-Native Plan

> This plan focuses specifically on the AI direction. How to make Gridly **genuinely** AI-native instead of slapping "AI" on a normal SaaS starter.

---

## The Problem With Most "AI Starters"

Every SaaS starter in 2025 claims to be "AI-ready." What they actually ship:

- A chat page with `useChat` that calls OpenAI
- Maybe a `.env` slot for `OPENAI_API_KEY`
- That's it

The buyer still has to figure out: tool calling, streaming, conversation persistence, rate limiting AI calls, background processing for AI tasks, and how to actually integrate AI with their data. **That's 80% of the work.**

Gridly should solve the hard parts and let the buyer just define their tools.

---

## What "AI-Native" Actually Means

The buyer should be able to:

1. **Define AI tools in config** → The chatbot can call them
2. **Get a working chat UI** → Streaming, message history, tool results rendered
3. **Run AI tasks in the background** → Via Inngest (summarize data, generate reports, process uploads)
4. **Protect AI routes** → Rate limit AI calls per user/plan (free = 10/day, pro = unlimited)

All from editing config + adding tool functions. No boilerplate wiring.

---

## The AI Config

Extends the main `config.ts`:

```ts
// config.ts — AI section

export const aiConfig = {
  // Which provider to use (buyer switches by changing this + env key)
  provider: "openai" as "openai" | "anthropic" | "google",

  // Default model — buyer can upgrade/downgrade
  model: "gpt-4o-mini",

  // System prompt — defines the chatbot's personality
  systemPrompt: `You are a helpful assistant for {{appName}}. 
    You can help users with their projects and answer questions.
    Be concise and friendly.`,

  // Rate limits per plan
  rateLimits: {
    free: { maxPerDay: 10 },
    pro: { maxPerDay: 1000 },
  },

  // Tools — the buyer adds their own here
  // Each tool has a name, description, and points to a handler file
  enabledTools: ["get-projects", "create-project"] as string[],
} as const;
```

---

## What Gets Built (In Order)

### Layer 1: Chat Scaffold (Build First — Day 8)
**The visible "wow" feature. Makes the demo impressive.**

| File | Purpose |
|------|---------|
| `app/(dashboard)/ai/page.tsx` | Chat page in dashboard |
| `features/ai/chat.tsx` | Chat UI component using `useChat` |
| `features/ai/message.tsx` | Message bubble component (user + assistant + tool results) |
| `app/api/ai/chat/route.ts` | API route — `streamText` with tools |
| `lib/ai.ts` | AI client setup (reads `aiConfig.provider` + `aiConfig.model`) |

**What the buyer gets:** A working chatbot in their dashboard. They change `aiConfig.model` and `aiConfig.systemPrompt` and it works. No code changes needed for basic use.

### Layer 2: Tool Calling System (Build Second — Day 9)
**The real differentiator. Nobody else does this at $29.**

| File | Purpose |
|------|---------|
| `server/ai/tools/index.ts` | Tool registry — auto-loads tools from `aiConfig.enabledTools` |
| `server/ai/tools/get-projects.ts` | Example tool — fetches user's projects from DB |
| `server/ai/tools/create-project.ts` | Example tool — creates a project via the chatbot |

**How tools work:**

```ts
// server/ai/tools/get-projects.ts
// The buyer copies this pattern to add their own tools

import { tool } from "ai";
import { z } from "zod";

export const getProjectsTool = tool({
  description: "Get the user's projects",
  parameters: z.object({}),
  execute: async (params, { userId }) => {
    const projects = await prisma.project.findMany({
      where: { userId },
      select: { id: true, name: true, description: true },
    });
    return { projects }; // plain JSON, no Date objects
  },
});
```

**The tool registry reads `aiConfig.enabledTools` and dynamically loads them.** Buyer adds a tool file, adds the name to config, done.

### Layer 3: Inngest AI Workflows (Build Third — Day 10)
**Background AI processing — the "holy shit this is useful" feature.**

| File | Purpose |
|------|---------|
| `server/inngest/client.ts` | Inngest client |
| `server/inngest/functions/ai-summarize.ts` | Example: summarize data on a schedule |
| `server/inngest/functions/on-signup.ts` | Example: welcome email + setup on user creation |
| `app/api/inngest/route.ts` | Inngest API handler |

**Example workflows the buyer can customize:**

```ts
// "Every Monday, summarize last week's activity and email the user"
inngest.createFunction(
  { id: "weekly-digest" },
  { cron: "0 9 * * MON" },
  async ({ step }) => {
    const users = await step.run("get-users", () => getActiveUsers());
    
    for (const user of users) {
      const summary = await step.run(`summarize-${user.id}`, () =>
        generateText({
          model: openai(aiConfig.model),
          prompt: `Summarize this week's activity for ${user.name}...`,
        })
      );
      
      await step.run(`email-${user.id}`, () =>
        resend.emails.send({ to: user.email, subject: "Your weekly digest", html: summary })
      );
    }
  }
);
```

---

## What to DELAY

| Feature | Why Delay |
|---------|-----------|
| Conversation persistence (save chat history to DB) | Nice to have, not core. Add in v2 |
| RAG / vector search | Complex, needs pgvector or Pinecone. v2 feature |
| Image generation | Different API pattern, not essential for launch |
| Multi-model switching in UI | Config handles the default. UI switcher is polish |
| Streaming tool results | Regular tool results are fine for v1 |
| AI admin panel (token usage, cost tracking) | Cool but not MVP |

---

## Real Timeline (Solo Builder)

This assumes auth + dashboard + Stripe are already done (Phase 1-2 from README.md).

| Day | What | Hours |
|-----|------|-------|
| 8 | `lib/ai.ts` + chat API route + chat page UI + `useChat` wiring | 4-5h |
| 9 | Tool calling system: registry, 2 example tools, render tool results in chat UI | 4-5h |
| 10 | Inngest setup: client, API route, 2 example functions (welcome email + weekly digest) | 3-4h |

**3 days of work.** After this, the AI section is genuinely useful and demo-worthy.

---

## The Demo Story

When you show Gridly's demo site, the AI chat should do something **real** in the demo:

> **User types:** "What projects do I have?"
> **Bot calls** `get-projects` tool → shows a list
> **User types:** "Create a project called 'My SaaS'"
> **Bot calls** `create-project` tool → confirms creation
> **User types:** "What projects do I have now?"
> **Bot calls** `get-projects` → shows the new project

This is 100x more impressive than a chatbot that just answers questions. It **does things.** That's what sells.

---

## Tech Stack Summary

| Layer | Tool | Why This One |
|-------|------|-------------|
| AI SDK | `ai` (Vercel AI SDK) | Provider-agnostic, streaming, tool calling built-in |
| Chat UI | `useChat` hook | Handles streaming, message state, error handling |
| Tools | `tool()` from `ai` + Zod schemas | Type-safe, JSON-serializable, model-friendly |
| Background | Inngest | Serverless crons + event-driven, works on Vercel |
| Email | Resend | Simple API, great DX, free tier |
| Rate limiting | Middleware check | Per-user per-day based on plan |

---

## What This Means for Pricing

With the AI layer, Gridly's value prop becomes:

> "Clone → set your OpenAI key → you have a SaaS with a working AI chatbot that can call your database, plus cron jobs and email. $19."

No other starter at this price includes:
- Config-driven AI tools
- Working tool calling with examples
- Background AI workflows (Inngest)
- Plan-based rate limiting on AI

This is what justifies the price going from $19 → $29 → $49 over time.
