import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Doto, Geist } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { appConfig } from "@/config";
import { generateThemeCSS } from "@/lib/theme-presets";
import { TRPCReactProvider } from "@/trpc/client";

const workSans = Geist({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto-family",
});

const themeCSS = generateThemeCSS(appConfig.theme, appConfig.radius);

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  icons: {
    icon: "/icon.svg",
  },
  metadataBase: new URL(appConfig.url),
  authors: [{ name: appConfig.creator.name, url: appConfig.creator.url }],
  keywords: [
    "SaaS",
    "Starter",
    "Kit",
    "Next.js",
    "TypeScript",
    "Prisma",
    "Stripe",
    "tRPC",
    "shadcn/ui",
    "Better Auth",
  ],
  openGraph: {
    title: appConfig.name,
    description: appConfig.description,
    siteName: appConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: appConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.name,
    description: appConfig.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${doto.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      </head>
      <body className={`antialiased`}>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
