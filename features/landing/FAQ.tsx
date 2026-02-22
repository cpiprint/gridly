import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircleIcon } from "lucide-react";
import { landingConfig } from "@/config";

const { faq } = landingConfig;

export const FAQ = () => {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16 md:py-18 text-left border-x border-dashed border-b">
      <div className="text-left mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-4 font-doto">
          <span className="whitespace-nowrap flex items-center gap-2">
            Commonly
            <HelpCircleIcon className="size-8 fill-primary/30 text-primary" />
          </span>
          Asked Questions
        </h2>
        <p className="text-muted-foreground text-md max-w-2xl">
          Everything you need to know about the starter. If you have any other
          questions, feel free to reach out.
        </p>
      </div>

      <div className="max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-dashed"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
