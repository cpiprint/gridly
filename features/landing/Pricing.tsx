"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, DollarSignIcon } from "lucide-react";
import { plansConfig } from "@/config";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

const Pricing = () => {
const handleCheckout = async (productId: string) => {
try {
await authClient.checkout({
products: [productId],
});
} catch (error) {
console.error("Checkout failed:", error);
// TODO: Show user-friendly error message (toast/alert)
}
};

  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 md:py-18 text-left border-x border-dashed border-b">
      <div className="text-left mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-4 font-doto">
          <span className="whitespace-nowrap flex items-center gap-2">
            Transparent
            <DollarSignIcon className="size-8 fill-primary/30 text-primary" />
          </span>
          Pricing
        </h2>
        <p className="text-muted-foreground text-md max-w-2xl">
          Simple, transparent plans that scale with you. Start free, upgrade
          when you&apos;re ready.
        </p>
      </div>

      <div
        className={cn(
          "grid gap-6 max-sm:grid-cols-1",
          plansConfig.length === 1
            ? "grid-cols-1 max-w-sm mx-auto"
            : plansConfig.length === 2
              ? "grid-cols-2 "
              : plansConfig.length === 3
                ? "grid-cols-3"
                : "grid-cols-3",
        )}
      >
        {plansConfig.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "bg-background relative overflow-hidden flex flex-col",
              plan.highlighted
                ? "border-2 border-primary/40 shadow-lg shadow-primary/5"
                : "border border-border/50",
            )}
          >
            {plan.highlighted && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest font-doto">
                Most Popular
              </div>
            )}

            <CardHeader>
              <CardTitle className="font-doto uppercase tracking-wider text-sm text-primary">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-sm mt-1">
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 flex-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-doto tracking-tighter">
                  {plan.price === 0 ? "Free" : `$${plan.price}`}
                </span>
                {plan.price > 0 && plan.billingPeriod === "month" && (
                  <span className="text-muted-foreground text-sm">/month</span>
                )}
                {plan.price > 0 && plan.billingPeriod === "one_time" && (
                  <span className="text-muted-foreground text-sm">one-time</span>
                )}
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="size-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className={cn(
                  "w-full h-11 font-semibold cursor-pointer",
                  plan.highlighted
                    ? ""
                    : "bg-transparent border border-border text-foreground hover:bg-muted",
                )}
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => handleCheckout(plan.productId)}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
