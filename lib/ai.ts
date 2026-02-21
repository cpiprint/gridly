import "server-only";

import { google } from "@ai-sdk/google";
import { appConfig } from "@/config";

/**
 * The shared AI model instance.
 * Switch provider by changing the model string or swapping the import.
 * Reads GOOGLE_GENERATIVE_AI_API_KEY from env automatically.
 */
export const aiModel = google("gemini-2.5-flash-lite");

export const systemPrompt = `You are a helpful AI assistant built into ${appConfig.name}.
You help users with their tasks, answer questions, and can interact with the app on their behalf.
Be concise, friendly, and actionable. When you use tools, always follow up with a clear summary of what you did.`;
