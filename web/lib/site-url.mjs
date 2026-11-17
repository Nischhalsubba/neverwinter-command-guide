export const DEFAULT_SITE_URL = "https://github.com/Nischhalsubba/neverwinter-command-guide";

export function normalizeSiteUrl(value) {
  if (typeof value !== "string" || !value.trim()) return DEFAULT_SITE_URL;
  const trimmed = value.trim();
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) && !/^https?:\/\//i.test(trimmed)) {
    return DEFAULT_SITE_URL;
  }

  try {
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    if (!["http:", "https:"].includes(url.protocol) || !url.hostname) return DEFAULT_SITE_URL;
    return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}
