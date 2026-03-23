import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import styles from "./page.module.css";

export const metadata = {
  title: "Neverwinter Command Guide",
  description:
    "A fan-made searchable reference for Neverwinter commands, with fast search, category browsing, and copy-ready syntax."
};

export default function HomePage() {
  return (
    <>
      <SiteHeader activePath="/" />
      <main className={`shell ${styles.home}`}>
        <section className={`cardSurface ${styles.hero}`}>
          <span className="eyebrow">Fan-Made Reference</span>
          <h1 className="displayTitle">A search-first guide for Neverwinter commands.</h1>
          <p className="sectionIntro">
            Browse chat, whisper, guild, alliance, emote, utility, and display commands
            with a cleaner information hierarchy and faster lookup flow.
          </p>
          <div className={styles.actions}>
            <Link href="/commands" className={styles.primaryAction}>
              Open All Commands
            </Link>
            <Link href="/about" className={styles.secondaryAction}>
              Read About
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
