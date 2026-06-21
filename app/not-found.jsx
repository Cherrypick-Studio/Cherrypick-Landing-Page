import Link from "next/link";

// Global fallback for paths outside the [locale] segment.
// Most 404s are handled by app/[locale]/not-found.jsx (the middleware rewrites
// unmatched paths into a locale); this only renders its own <html> for the rare
// non-localized miss, since there is no html-owning root layout above it.
export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "system-ui, sans-serif",
          background: "#0B0B0B",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>404</h1>
        <p style={{ color: "#A1A1A1" }}>This page could not be found.</p>
        <Link href="/" style={{ color: "#C42026", fontWeight: 600 }}>
          Back to home
        </Link>
      </body>
    </html>
  );
}
