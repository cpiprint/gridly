import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { z } from "zod";

const databaseEnvSchema = z.object({
  DATABASE_URL: z.string().trim().min(1),
});

const { DATABASE_URL: connectionString } = databaseEnvSchema.parse(process.env);

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
