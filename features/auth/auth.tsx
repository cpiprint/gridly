import { appConfig, authConfig } from "@/config";
import Link from "next/link";
import { SignInForm } from "./signin";

export default function SignInPage() {
  const { marketing } = authConfig;

  return (
    <main className="h-svh bg-background">
      {/* Sign-in content area */}
      <div className="container mx-auto max-w-4xl border-x border-dashed border-b h-full">
        <div className="grid md:grid-cols-2 size-full">
          {/* Left panel — branding */}
          <div className="hidden md:flex flex-col justify-between p-10 border-r border-dashed">
            <div />
            <div className="space-y-6">
              <h1 className="text-3xl font-doto tracking-tight flex flex-col gap-1 font-bold">
                <span className="text-primary flex items-center gap-2 flex-wrap">
                  <marketing.titleIcon className="size-8 text-primary fill-primary/30 shrink-0" />
                  {marketing.headline}
                </span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                {marketing.description}.
              </p>
            </div>

            {/* Grid decoration */}
            <Link href="/" prefetch>
              <div className="flex items-center gap-3 text-xs text-muted-foreground group">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`size-2 rounded-[2px] ${
                        [0, 3, 5, 6, 9, 10, 12, 15].includes(i)
                          ? "bg-primary/40 group-hover:bg-primary transition-all"
                          : "bg-muted/40 group-hover:bg-muted/60 transition-all"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-doto uppercase tracking-widest">
                  {appConfig.name}
                </span>
              </div>
            </Link>
          </div>

          {/* Right panel — form */}
          <div className="flex items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
