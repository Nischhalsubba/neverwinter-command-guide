import Link from "next/link";
import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, featuredCommands, getCommandsByCategory } from "@/lib/commands-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Neverwinter Command Guide | Chat, Emotes, Utility, and Slash Commands",
  description:
    "Search and browse Neverwinter chat commands, whispers, emotes, utility tools, screenshots, combat logging, and troubleshooting shortcuts in one fan-made command reference built for fast player lookup.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Neverwinter Command Guide | Chat, Emotes, Utility, and Slash Commands",
    description:
      "A fan-made searchable reference for Neverwinter slash commands, chat tools, emotes, screenshots, combat logging, and player utility shortcuts.",
    url: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <SiteHeader activePath="/" />
      <main className={`shell ${styles.page}`}>
        <section className={styles.hero}>
          <span className="eyebrow">Player Command Guide</span>
          <h1 className="displayTitle">Search Neverwinter commands faster, with clearer explanations and cleaner syntax.</h1>
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
            <h2>What this guide actually covers</h2>
            <p>
              This fan-made reference is built for both quick command lookup and deeper reading.
              You can search slash commands, browse by category, compare aliases, and open detail
              pages for syntax, examples, and practical in-game use.
            </p>
          </article>
          <article>
            <h2>Why Neverwinter players bookmark it</h2>
            <p>
              Neverwinter mixes social chat, whispers, guild coordination, emotes, display
              controls, and troubleshooting tools in one slash-command layer. A structured guide is
              faster to use than scanning a raw command dump, especially when you only remember an
              alias or part of the syntax.
            </p>
          </article>
          <article>
            <h2>How to use the guide</h2>
            <p>
              Start with the most-used commands, then move into category pages for chat, emotes,
              or utility actions. When a command needs more context, open its dedicated page to see
              what it does, when players use it, and which aliases are commonly documented.
            </p>
          </article>
        </section>

        <CommandPreviewGrid
          title="Most Used Commands"
          intro="Start with the commands players use every day for private messages, alliance chat, combat logs, screenshots, and stuck recovery."
          commands={featuredCommands}
        />

        <CommandPreviewGrid
          title="Chat and Coordination"
          intro="Browse the commands that power alliance chat, guild coordination, party calls, local communication, and direct whispers during normal play."
          commands={getCommandsByCategory("Chat").concat(getCommandsByCategory("Private")).slice(0, 6)}
        />

        <CommandPreviewGrid
          title="Utility and Display"
          intro="Find practical commands for screenshots, combat logging, framerate checks, movement recovery, targeting behavior, and display setup."
          commands={getCommandsByCategory("Utility").slice(0, 6)}
        />
      </main>
    </>
  );
}
