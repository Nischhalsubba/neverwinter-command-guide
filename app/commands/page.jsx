import { CommandLibrary } from "@/components/command-library";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "Neverwinter Commands List | Search Chat, Emote & Utility Commands",
  description:
    "Search Neverwinter commands, chat shortcuts, whispers, emotes, utility commands, and copy-ready syntax in a detailed player-friendly command reference.",
  alternates: {
    canonical: "/commands"
  },
  openGraph: {
    title: "Neverwinter Commands List | Search Chat, Emote & Utility Commands",
    description:
      "Search Neverwinter slash commands by syntax, alias, or category and open detail pages for examples, descriptions, and command use cases.",
    url: "/commands"
  }
};

export default function CommandsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Search All Neverwinter Commands",
    description:
      "Find Neverwinter chat, whisper, guild, alliance, emote, display, and utility commands in one searchable guide built for fast lookup and clean copy-ready syntax.",
    url: `${siteUrl}/commands`,
    about: {
      "@type": "Thing",
      name: "Neverwinter slash commands"
    }
  };

  return (
    <>
      <SiteHeader activePath="/commands" />
      <CommandLibrary />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
