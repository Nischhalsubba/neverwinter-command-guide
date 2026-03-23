const envUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

export const siteUrl = envUrl
  ? `https://${envUrl.replace(/^https?:\/\//, "")}`
  : "https://example.com";
