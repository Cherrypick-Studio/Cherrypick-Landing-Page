import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Shared branded Open Graph / Twitter image used across the site.
// Rendered to PNG so social + AI crawlers (which don't render SVG) get a valid preview.
export function brandedOgImage({ title, subtitle, eyebrow = "Cherrypick Studio" } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0B",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "#C42026",
              marginRight: 20,
            }}
          />
          {eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: title ? 60 : 72,
              fontWeight: 800,
              lineHeight: 1.12,
              maxWidth: 1000,
            }}
          >
            {title || "Design it. Build it. Love it."}
          </div>
          {subtitle ? (
            <div
              style={{
                color: "#F26B6F",
                fontSize: 30,
                marginTop: 28,
                fontWeight: 600,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", color: "#9CA3AF", fontSize: 26 }}>
          Web · Mobile · UI/UX · Branding — Indonesia &amp; Europe
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
