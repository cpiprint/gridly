// ─── Theme Presets ───────────────────────────────────
// Each preset defines oklch color values for light and dark mode.
// The buyer picks one in config.ts → appConfig.theme
// These override the defaults in globals.css via a <style> tag in layout.tsx.

export type ThemePreset = {
  light: Record<string, string>;
  dark: Record<string, string>;
};

export const themePresets: Record<
  "orange" | "blue" | "violet" | "rose" | "emerald" | "amber",
  ThemePreset
> = {
  // ── Orange (Default) ──────────────────────────────
  orange: {
    light: {
      "--primary": "oklch(0.646 0.222 41.116)",
      "--primary-foreground": "oklch(0.98 0.016 73.684)",
      "--ring": "oklch(0.708 0 0)",
      "--sidebar-primary": "oklch(0.646 0.222 41.116)",
      "--sidebar-primary-foreground": "oklch(0.98 0.016 73.684)",
      "--chart-1": "oklch(0.837 0.128 66.29)",
      "--chart-2": "oklch(0.705 0.213 47.604)",
      "--chart-3": "oklch(0.646 0.222 41.116)",
      "--chart-4": "oklch(0.553 0.195 38.402)",
      "--chart-5": "oklch(0.47 0.157 37.304)",
    },
    dark: {
      "--primary": "oklch(0.705 0.213 47.604)",
      "--primary-foreground": "oklch(0.98 0.016 73.684)",
      "--ring": "oklch(0.556 0 0)",
      "--sidebar-primary": "oklch(0.705 0.213 47.604)",
      "--sidebar-primary-foreground": "oklch(0.98 0.016 73.684)",
      "--chart-1": "oklch(0.837 0.128 66.29)",
      "--chart-2": "oklch(0.705 0.213 47.604)",
      "--chart-3": "oklch(0.646 0.222 41.116)",
      "--chart-4": "oklch(0.553 0.195 38.402)",
      "--chart-5": "oklch(0.47 0.157 37.304)",
    },
  },

  // ── Blue ──────────────────────────────────────────
  blue: {
    light: {
      "--primary": "oklch(82.14% 0.0552 235.34)",
      "--primary-foreground": "oklch(0.985 0.001 262)",
      "--ring": "oklch(0.546 0.245 262.881)",
      "--sidebar-primary": "oklch(0.546 0.245 262.881)",
      "--sidebar-primary-foreground": "oklch(0.985 0.001 262)",
      "--chart-1": "oklch(0.7 0.17 262)",
      "--chart-2": "oklch(0.6 0.22 262)",
      "--chart-3": "oklch(0.546 0.245 262.881)",
      "--chart-4": "oklch(0.45 0.2 262)",
      "--chart-5": "oklch(0.38 0.16 262)",
    },
    dark: {
      "--primary": "oklch(82.14% 0.0952 235.34)",
      "--primary-foreground": "oklch(0.985 0.001 262)",
      "--ring": "oklch(0.623 0.214 259.815)",
      "--sidebar-primary": "oklch(0.623 0.214 259.815)",
      "--sidebar-primary-foreground": "oklch(0.985 0.001 262)",
      "--chart-1": "oklch(0.75 0.15 262)",
      "--chart-2": "oklch(0.65 0.2 262)",
      "--chart-3": "oklch(0.546 0.245 262.881)",
      "--chart-4": "oklch(0.45 0.18 262)",
      "--chart-5": "oklch(0.38 0.14 262)",
    },
  },

  // ── Violet ────────────────────────────────────────
  violet: {
    light: {
      "--primary": "oklch(0.541 0.281 293.009)",
      "--primary-foreground": "oklch(0.985 0.002 293)",
      "--ring": "oklch(0.541 0.281 293.009)",
      "--sidebar-primary": "oklch(0.541 0.281 293.009)",
      "--sidebar-primary-foreground": "oklch(0.985 0.002 293)",
      "--chart-1": "oklch(0.72 0.18 293)",
      "--chart-2": "oklch(0.62 0.24 293)",
      "--chart-3": "oklch(0.541 0.281 293.009)",
      "--chart-4": "oklch(0.45 0.22 293)",
      "--chart-5": "oklch(0.38 0.18 293)",
    },
    dark: {
      "--primary": "oklch(0.649 0.243 293.745)",
      "--primary-foreground": "oklch(0.985 0.002 293)",
      "--ring": "oklch(0.649 0.243 293.745)",
      "--sidebar-primary": "oklch(0.649 0.243 293.745)",
      "--sidebar-primary-foreground": "oklch(0.985 0.002 293)",
      "--chart-1": "oklch(0.78 0.15 293)",
      "--chart-2": "oklch(0.68 0.2 293)",
      "--chart-3": "oklch(0.541 0.281 293.009)",
      "--chart-4": "oklch(0.45 0.2 293)",
      "--chart-5": "oklch(0.38 0.16 293)",
    },
  },

  // ── Rose ──────────────────────────────────────────
  rose: {
    light: {
      "--primary": "oklch(0.585 0.233 14.645)",
      "--primary-foreground": "oklch(0.985 0.003 14)",
      "--ring": "oklch(0.585 0.233 14.645)",
      "--sidebar-primary": "oklch(0.585 0.233 14.645)",
      "--sidebar-primary-foreground": "oklch(0.985 0.003 14)",
      "--chart-1": "oklch(0.75 0.15 14)",
      "--chart-2": "oklch(0.65 0.2 14)",
      "--chart-3": "oklch(0.585 0.233 14.645)",
      "--chart-4": "oklch(0.48 0.19 14)",
      "--chart-5": "oklch(0.4 0.15 14)",
    },
    dark: {
      "--primary": "oklch(0.655 0.21 14.645)",
      "--primary-foreground": "oklch(0.985 0.003 14)",
      "--ring": "oklch(0.655 0.21 14.645)",
      "--sidebar-primary": "oklch(0.655 0.21 14.645)",
      "--sidebar-primary-foreground": "oklch(0.985 0.003 14)",
      "--chart-1": "oklch(0.8 0.12 14)",
      "--chart-2": "oklch(0.7 0.18 14)",
      "--chart-3": "oklch(0.585 0.233 14.645)",
      "--chart-4": "oklch(0.48 0.17 14)",
      "--chart-5": "oklch(0.4 0.13 14)",
    },
  },

  // ── Emerald ───────────────────────────────────────
  emerald: {
    light: {
      "--primary": "oklch(0.596 0.169 163.225)",
      "--primary-foreground": "oklch(0.985 0.003 163)",
      "--ring": "oklch(0.596 0.169 163.225)",
      "--sidebar-primary": "oklch(0.596 0.169 163.225)",
      "--sidebar-primary-foreground": "oklch(0.985 0.003 163)",
      "--chart-1": "oklch(0.76 0.12 163)",
      "--chart-2": "oklch(0.66 0.15 163)",
      "--chart-3": "oklch(0.596 0.169 163.225)",
      "--chart-4": "oklch(0.5 0.14 163)",
      "--chart-5": "oklch(0.42 0.11 163)",
    },
    dark: {
      "--primary": "oklch(0.668 0.16 163.225)",
      "--primary-foreground": "oklch(0.985 0.003 163)",
      "--ring": "oklch(0.668 0.16 163.225)",
      "--sidebar-primary": "oklch(0.668 0.16 163.225)",
      "--sidebar-primary-foreground": "oklch(0.985 0.003 163)",
      "--chart-1": "oklch(0.8 0.1 163)",
      "--chart-2": "oklch(0.7 0.14 163)",
      "--chart-3": "oklch(0.596 0.169 163.225)",
      "--chart-4": "oklch(0.5 0.12 163)",
      "--chart-5": "oklch(0.42 0.1 163)",
    },
  },

  // ── Amber ─────────────────────────────────────────
  amber: {
    light: {
      "--primary": "oklch(0.769 0.188 70.08)",
      "--primary-foreground": "oklch(0.2 0.04 70)",
      "--ring": "oklch(0.769 0.188 70.08)",
      "--sidebar-primary": "oklch(0.769 0.188 70.08)",
      "--sidebar-primary-foreground": "oklch(0.2 0.04 70)",
      "--chart-1": "oklch(0.86 0.13 70)",
      "--chart-2": "oklch(0.769 0.188 70.08)",
      "--chart-3": "oklch(0.68 0.17 70)",
      "--chart-4": "oklch(0.58 0.14 70)",
      "--chart-5": "oklch(0.49 0.11 70)",
    },
    dark: {
      "--primary": "oklch(0.82 0.17 70.08)",
      "--primary-foreground": "oklch(0.2 0.04 70)",
      "--ring": "oklch(0.82 0.17 70.08)",
      "--sidebar-primary": "oklch(0.82 0.17 70.08)",
      "--sidebar-primary-foreground": "oklch(0.2 0.04 70)",
      "--chart-1": "oklch(0.88 0.11 70)",
      "--chart-2": "oklch(0.82 0.17 70.08)",
      "--chart-3": "oklch(0.72 0.15 70)",
      "--chart-4": "oklch(0.6 0.13 70)",
      "--chart-5": "oklch(0.5 0.1 70)",
    },
  },
} as const;

export type ThemeName = keyof typeof themePresets;

// ─── Radius Presets ──────────────────────────────────
// Maps friendly names to CSS rem values for --radius.
// All other radii (sm, md, lg, xl, etc.) are derived from this in globals.css.
export const radiusPresets = {
  sm: "0px",
  md: "0.25rem",
  lg: "0.5rem",
  xl: "0.75rem",
} as const;

export type RadiusName = keyof typeof radiusPresets;

/**
 * Generates a CSS string that overrides the default theme variables.
 * Injected by layout.tsx as a <style> tag.
 */
export function generateThemeCSS(
  theme: ThemeName,
  radius?: RadiusName,
): string {
  const preset = themePresets[theme];
  if (!preset) return "";

  const radiusValue = radiusPresets[radius ?? "lg"];

  const lightVars = Object.entries(preset.light)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n");

  const darkVars = Object.entries(preset.dark)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n");

  return `:root {\n${lightVars}\n  --radius: ${radiusValue};\n}\n.dark {\n${darkVars}\n}`;
}
