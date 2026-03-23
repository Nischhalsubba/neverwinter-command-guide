import { SiteHeader } from "@/components/site-header";
import styles from "./page.module.css";

export const metadata = {
  title: "About",
  description:
    "About the Neverwinter Command Guide fan-made command library, its goals, and its disclaimer."
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePath="/about" />
      <main className={`shell ${styles.about}`}>
        <section className={`cardSurface ${styles.panel}`}>
          <span className="eyebrow">About</span>
          <h1 className="sectionTitle">Player-first command lookup.</h1>
          <p className="sectionIntro">
            Neverwinter Command Guide is a fan-made reference focused on quick command
            discovery, clean copy-ready syntax, and accessible browsing across desktop,
            tablet, and mobile screens.
          </p>
          <p className="sectionIntro">
            The site groups commands by the way players actually search for them: chat,
            private, party and guild, utility, emotes, and display tools. Commands with
            incomplete public descriptions are marked carefully instead of guessed.
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
