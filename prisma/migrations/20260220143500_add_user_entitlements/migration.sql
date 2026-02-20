-- Add billing entitlement fields to user for webhook-driven plan updates
ALTER TABLE "user"
ADD COLUMN "planSlug" TEXT NOT NULL DEFAULT 'free',
ADD COLUMN "planStatus" TEXT NOT NULL DEFAULT 'inactive',
ADD COLUMN "polarCustomerId" TEXT,
ADD COLUMN "polarSubscriptionId" TEXT,
ADD COLUMN "polarProductId" TEXT,
ADD COLUMN "polarLastOrderId" TEXT,
ADD COLUMN "entitlementUpdatedAt" TIMESTAMP(3);

-- Lookup indexes for billing queries and support workflows
CREATE INDEX "user_planSlug_idx" ON "user"("planSlug");
CREATE INDEX "user_polarCustomerId_idx" ON "user"("polarCustomerId");
