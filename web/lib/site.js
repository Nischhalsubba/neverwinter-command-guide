import { normalizeSiteUrl } from "./site-url.mjs";

const envUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

export const siteUrl = normalizeSiteUrl(envUrl);
