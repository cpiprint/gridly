import { Check, Minus, SwordsIcon } from "lucide-react";
import { landingConfig } from "@/config";

const { comparison } = landingConfig;

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="font-medium text-foreground text-sm">{value}</span>;
  }
  return value ? (
    <Check className="size-4 text-primary mx-auto" />
  ) : (
    <Minus className="size-4 text-muted-foreground/40 mx-auto" />
  );
}

export const Comparison = () => {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16 md:py-18 text-left border-x border-dashed border-b">
      <div className="text-left mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          <span className="whitespace-nowrap flex items-center gap-2">
            Why
            <SwordsIcon className="size-8 fill-primary/30 text-primary" />
          </span>
          {comparison.productName}?
        </h2>
        <p className="text-muted-foreground text-md max-w-2xl">
          Most starters give you auth and payments. {comparison.productName}{" "}
          gives you that plus an AI-native foundation — for a fraction of the
          price.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dashed">
              <th className="text-left py-3 pr-4 text-muted-foreground font-medium w-[40%]">
                Feature
              </th>
              <th className="text-center py-3 px-4 font-semibold text-primary font-doto tracking-wide">
                {comparison.productName}
              </th>
              {comparison.competitors.map((name) => (
                <th
                  key={name}
                  className="text-center py-3 px-4 text-muted-foreground font-medium"
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-dashed last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="py-3 pr-4 text-muted-foreground">
                  {row.feature}
                </td>
                {row.values.map((val, j) => (
                  <td key={j} className="py-3 px-4 text-center">
                    <CellValue value={val} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
