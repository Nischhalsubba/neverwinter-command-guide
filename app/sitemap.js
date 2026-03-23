import { siteUrl } from "@/lib/site";

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      priority: 1
    },
    {
      url: `${siteUrl}/commands`,
      priority: 0.9
    },
    {
      url: `${siteUrl}/about`,
      priority: 0.6
    }
  ];
}
