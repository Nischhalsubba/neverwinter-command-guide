import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, getCommandsByCategory } from "@/lib/commands-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "Neverwinter Emote Commands",
  description:
    "Browse Neverwinter emote commands with descriptions, examples, aliases, and command detail pages for social and roleplay actions.",
  alternates: {
    canonical: "/emotes"
  }
};

export default function EmotesPage() {
  return (
    <>
      <SiteHeader activePath="/emotes" />
      <main className={`shell ${styles.about}`}>
        <section className={`cardSurface ${styles.panel}`}>
          <span className="eyebrow">Emotes</span>
          <h1 className="sectionTitle">{categoryPageContent.emotes.title}</h1>
          <p className="sectionIntro">{categoryPageContent.emotes.intro}</p>
        </section>
        <CommandPreviewGrid
          title="Roleplay and Social Emotes"
          intro="Wave, salute, dance, shrug, and other social commands used for reactions, greetings, and visual roleplay."
          commands={getCommandsByCategory("Emotes")}
        />
      </main>
    </>
  );
}
