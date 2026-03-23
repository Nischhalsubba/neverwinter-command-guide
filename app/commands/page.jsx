import { CommandLibrary } from "@/components/command-library";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "Neverwinter Commands List | Search Chat, Emote & Utility Commands",
  description:
    "Search Neverwinter commands, chat shortcuts, whispers, emotes, utility commands, and copy-ready syntax in a clean player-friendly reference.",
  alternates: {
    canonical: "/commands"
  }
};

export default function CommandsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Search All Neverwinter Commands",
    description:
      "Find Neverwinter chat, whisper, guild, alliance, emote, and utility commands in one searchable guide built for fast lookup and clean copy-ready syntax.",
    url: `${siteUrl}/commands`
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
