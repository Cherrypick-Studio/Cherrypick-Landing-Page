import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation APIs. Use these instead of next/link & next/navigation
// so that links automatically carry the active locale (and id gets its /id prefix).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
