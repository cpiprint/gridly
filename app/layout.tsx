import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { appConfig } from "@/config";
import { generateThemeCSS } from "@/lib/theme-presets";
import { TRPCReactProvider } from "@/trpc/client";
import { GeistPixelSquare } from "geist/font/pixel";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const workSans = Geist({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.name,
    description: appConfig.description,
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
      className={`${workSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable}`}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
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
