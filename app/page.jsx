import Link from "next/link";
import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, featuredCommands, getCommandsByCategory } from "@/lib/commands-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Neverwinter Command Guide | Chat, Emotes, Utility, and Slash Commands",
  description:
    "Search and browse Neverwinter chat commands, whispers, emotes, utility tools, screenshots, combat logging, and troubleshooting shortcuts in one fan-made reference.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <SiteHeader activePath="/" />
      <main className={`shell ${styles.page}`}>
        <section className={styles.hero}>
          <span className="eyebrow">Player Command Guide</span>
          <h1 className="displayTitle">The searchable Neverwinter command manual players actually need.</h1>
          <p className={styles.heroCopy}>{categoryPageContent.home.intro}</p>
          <div className={styles.heroActions}>
            <Link href="/commands" className={styles.primaryAction}>
              Browse All Commands
            </Link>
            <Link href="/utility" className={styles.secondaryAction}>
              Explore Utility Tools
            </Link>
          </div>
        </section>

        <section className={styles.richIntro}>
          <article>
            <h2>What this guide covers</h2>
            <p>
              This guide is built for quick lookups and deeper reading. You can search commands,
              browse by category, compare aliases, and open detail pages for syntax, examples,
              and practical use cases during real gameplay.
            </p>
          </article>
          <article>
            <h2>Why players use it</h2>
            <p>
              Neverwinter mixes social chat, roleplay emotes, display controls, and troubleshooting
              utilities in one slash-command layer. That makes a searchable reference more useful
              than memorizing a raw command list.
            </p>
          </article>
          <article>
            <h2>How to navigate</h2>
            <p>
              Start with most-used commands, then jump into category pages for chat, emotes, or
              utility. When you need more context, open a detail page for a command to see
              syntax, aliases, and example usage in one place.
            </p>
          </article>
        </section>

        <CommandPreviewGrid
          title="Most Used Commands"
          intro="Start with the commands most players need for whispers, guild chat, combat logs, screenshots, and getting unstuck."
          commands={featuredCommands}
        />

        <CommandPreviewGrid
          title="Chat and Coordination"
          intro="Alliance, guild, party, zone, and private-message commands used during normal play."
          commands={getCommandsByCategory("Chat").concat(getCommandsByCategory("Private")).slice(0, 6)}
        />

        <CommandPreviewGrid
          title="Utility and Display"
          intro="Performance, screenshots, movement recovery, and other practical commands used for troubleshooting and setup."
          commands={getCommandsByCategory("Utility").slice(0, 6)}
        />
      </main>
    </>
  );
}
