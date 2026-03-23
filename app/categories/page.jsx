import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, getCommandsByCategory } from "@/lib/commands-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "Neverwinter Command Categories | Chat, Private, Party, Guild, Utility, and Emotes",
  description:
    "Browse Neverwinter commands by category, including chat, private messages, party and guild tools, emotes, utility controls, display settings, and troubleshooting shortcuts.",
  alternates: {
    canonical: "/categories"
  },
  openGraph: {
    title: "Neverwinter Command Categories",
    description:
      "Browse Neverwinter slash commands by category so you can find chat, utility, guild, emote, and display tools faster.",
    url: "/categories"
  }
};

export default function CategoriesPage() {
  return (
    <>
      <SiteHeader activePath="/categories" />
      <main className={`shell ${styles.about}`}>
        <section className={`cardSurface ${styles.panel}`} data-reveal data-tilt>
          <span className="eyebrow">Categories</span>
          <h1 className="sectionTitle">{categoryPageContent.categories.title}</h1>
          <p className="sectionIntro">{categoryPageContent.categories.intro}</p>
          <p className="sectionIntro">
            Instead of memorizing one long command list, this page groups Neverwinter commands by
            player intent. Start with public chat and whispers, then move into party and guild
            coordination, emotes, utility tools, and display-focused shortcuts.
          </p>
        </section>
        <CommandPreviewGrid
          title="Chat Commands"
          intro="Public communication commands for alliance chat, local chat, and zone-wide messages."
          commands={getCommandsByCategory("Chat")}
        />
        <CommandPreviewGrid
          title="Private Commands"
          intro="Direct-message commands for whispers, replies, and one-to-one player communication."
          commands={getCommandsByCategory("Private")}
        />
        <CommandPreviewGrid
          title="Party and Guild Commands"
          intro="Commands used to organize parties, communicate with guild members, and manage officer-level coordination."
          commands={getCommandsByCategory("Party / Guild")}
        />
      </main>
    </>
  );
}
