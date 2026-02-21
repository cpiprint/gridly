import "server-only";

import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  stepCountIs,
} from "ai";
import { z } from "zod";
import { aiModel, systemPrompt } from "@/lib/ai";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  // Auth guard — only signed-in users can hit this route
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: aiModel,
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    // Allow multi-step tool calls (model calls tool → sees result → responds)
    stopWhen: stepCountIs(5),
    tools: {
      /**
       * Example tool — returns info about the current user.
       * This is the pattern buyers copy to add their own tools.
       */
      getUserInfo: tool({
        description:
          "Get information about the currently signed-in user, such as their name, email, and plan.",
        inputSchema: z.object({}),
        execute: async () => {
          return {
            name: session.user.name,
            email: session.user.email,
            id: session.user.id,
          };
        },
      }),

      /**
       * Example tool — returns the current date/time.
       * Shows buyers how to add simple utility tools.
       */
      getCurrentTime: tool({
        description: "Get the current date and time.",
        inputSchema: z.object({}),
        execute: async () => {
          return {
            datetime: new Date().toISOString(),
            date: new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            time: new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        },
      }),
    },
    onError: (error) => {
      console.error("[AI Chat] streamText error:", error);
    },
  });

  return result.toUIMessageStreamResponse();
}
