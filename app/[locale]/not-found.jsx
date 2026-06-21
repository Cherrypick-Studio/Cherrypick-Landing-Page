import React from "react";
import Custom404Content from "@/components/organisms/not-found-content";

export const metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <Custom404Content />;
}
