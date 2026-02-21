import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gridly — AI-Native Next.js SaaS Starter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Programmatic OG image that mirrors the Gridly grid logo.
 * No external assets needed — pure JSX rendered at the edge.
 */
export default function OGImage() {
  // Grid pattern matching the icon.svg checkerboard
  const grid = [
    [1, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 0],
  ];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090b",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          marginBottom: 40,
        }}
      >
        {grid.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 6 }}>
            {row.map((cell, ci) => (
              <div
                key={ci}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 3,
                  backgroundColor: cell ? "#e5e5e5" : "#27272a",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: "#fafafa",
          letterSpacing: "-2px",
          lineHeight: 1,
        }}
      >
        Gridly
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 24,
          color: "#a1a1aa",
          marginTop: 16,
          letterSpacing: "-0.5px",
        }}
      >
        The open-source, AI-native Next.js SaaS starter.
      </div>

      {/* Bottom tech badges */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 48,
          fontSize: 14,
          color: "#52525b",
          letterSpacing: "0.5px",
        }}
      >
        {[
          "Next.js",
          "TypeScript",
          "tRPC",
          "Prisma",
          "Better Auth",
          "Vercel AI SDK",
        ].map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
