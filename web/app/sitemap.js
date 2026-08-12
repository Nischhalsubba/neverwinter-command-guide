import { siteUrl } from "@/lib/site";
import { getAllCommands, getCommandUrl } from "@/lib/commands-data";

export default function sitemap() {
  const staticPages = [
    {
      url: `${siteUrl}/`,
      priority: 1
    },
    {
      url: `${siteUrl}/commands`,
      priority: 0.9
    },
    {
      url: `${siteUrl}/categories`,
      priority: 0.8
    },
    {
      url: `${siteUrl}/emotes`,
      priority: 0.8
    },
    {
      url: `${siteUrl}/utility`,
      priority: 0.8
    },
    {
      url: `${siteUrl}/about`,
      priority: 0.6
    }
  ];

  const commandPages = getAllCommands().map((command) => ({
    url: `${siteUrl}${getCommandUrl(command)}`,
    priority: 0.7
  }));

  return [...staticPages, ...commandPages];
}
