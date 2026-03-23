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
        <section className={`cardSurface ${styles.panel}`} data-reveal data-tilt>
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
            The project was designed and developed by <strong>Archew | Aяcнië</strong>.
          </p>
          <p className="sectionIntro">
            Neverwinter Command Guide is a fan-made project and is not affiliated with Cryptic
            Studios, Gearbox Publishing, Wizards of the Coast, or the official Neverwinter
            website.
          </p>
          <div className={styles.officialBlock}>
            <h2 className="sectionTitle">Official Neverwinter Resources</h2>
            <p className="sectionIntro">
              For official game access, account support, and trusted platform pages, use the
              verified Neverwinter resources below.
            </p>
            <div className={styles.officialLinks}>
              <a href="https://www.playneverwinter.com/" target="_blank" rel="noreferrer">
                Official Website
              </a>
              <a
                href="https://support.playneverwinter.com/hc/en-us/"
                target="_blank"
                rel="noreferrer"
              >
                Official Support
              </a>
              <a href="https://launcher.playneverwinter.com/" target="_blank" rel="noreferrer">
                Official Launcher
              </a>
              <a
                href="https://store.steampowered.com/app/109600/Neverwinter/"
                target="_blank"
                rel="noreferrer"
              >
                Official Steam Page
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
