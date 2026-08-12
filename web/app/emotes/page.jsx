import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, getCommandsByCategory } from "@/lib/commands-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "Neverwinter Emote Commands | Social and Roleplay Slash Commands",
  description:
    "Browse Neverwinter emote commands with descriptions, examples, aliases, and command detail pages for greetings, reactions, roleplay, and social interactions.",
  alternates: {
    canonical: "/emotes"
  },
  openGraph: {
    title: "Neverwinter Emote Commands",
    description:
      "Find Neverwinter emote commands for greetings, reactions, roleplay, and social scenes, with examples and quick explanations.",
    url: "/emotes"
  }
};

export default function EmotesPage() {
  return (
    <>
      <SiteHeader activePath="/emotes" />
      <main className={`shell ${styles.about}`}>
        <section className={`cardSurface ${styles.panel}`} data-reveal data-tilt>
          <span className="eyebrow">Emotes</span>
          <h1 className="sectionTitle">{categoryPageContent.emotes.title}</h1>
          <p className="sectionIntro">{categoryPageContent.emotes.intro}</p>
          <p className="sectionIntro">
            Emote commands are some of the most overlooked slash commands in Neverwinter. They are
            useful for roleplay, guild events, screenshots, and small social moments that make the
            game world feel more alive.
          </p>
        </section>
        <CommandPreviewGrid
          title="Roleplay and Social Emotes"
          intro="Wave, salute, dance, shrug, and other social emotes used for greetings, reactions, screenshots, and in-character moments."
          commands={getCommandsByCategory("Emotes")}
        />
      </main>
    </>
  );
}
