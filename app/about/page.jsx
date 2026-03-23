import { SiteHeader } from "@/components/site-header";
import styles from "./page.module.css";

export const metadata = {
  title: "About Neverwinter Command Guide",
  description:
    "Learn what the Neverwinter Command Guide covers, how the fan-made command library is organized, and what its editorial goals are."
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePath="/about" />
      <main className={`shell ${styles.about}`}>
        <section className={`cardSurface ${styles.panel}`}>
          <span className="eyebrow">About</span>
          <h1 className="sectionTitle">A player-first Neverwinter command reference.</h1>
          <p className="sectionIntro">
            Neverwinter Command Guide is a fan-made editorial reference built to make Neverwinter
            slash commands easier to search, easier to understand, and faster to use during actual
            gameplay.
          </p>
          <p className="sectionIntro">
            The site groups commands the way players naturally look for them: public chat, private
            whispers, party and guild coordination, utility shortcuts, display settings, and
            emotes. When a command has incomplete public documentation, the copy stays cautious
            instead of pretending certainty.
          </p>
          <p className="sectionIntro">
            The goal is simple: give players cleaner syntax, stronger context, and command pages
            that are useful enough to bookmark. That includes clearer examples, alias coverage,
            command-category navigation, and search-friendly content that surfaces the most useful
            commands quickly.
          </p>
          <p className="sectionIntro">
            Neverwinter Command Guide is a fan-made project and is not affiliated with
            Cryptic Studios, Gearbox Publishing, Wizards of the Coast, or the official
            Neverwinter website.
          </p>
        </section>
      </main>
    </>
  );
}
