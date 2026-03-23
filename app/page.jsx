import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { essentialCiphers, homepageSectors } from "@/lib/commands-data";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" searchPlaceholder="Search commands (e.g. /whisper, /dance, /guild)..." login />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={`shell ${styles.heroInner}`}>
            <span className="eyebrow">v2.4 Live Reference</span>
            <h1 className="displayTitle">
              Neverwinter <span className={styles.accent}>Command</span>
              <br />
              Guide
            </h1>
            <p className={styles.heroCopy}>
              A comprehensive, editorial-grade reference for chat syntax, social emotes,
              and utility parameters. Master the arcane terminal of the Sword Coast.
            </p>
            <div className={styles.heroSearch}>
              <div className={styles.heroSearchIcon}>⌕</div>
              <span>Search commands (e.g. /whisper, /dance, /guild)...</span>
              <div className={styles.heroKeys}>
                <kbd>CTRL</kbd>
                <kbd>K</kbd>
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className={`shell ${styles.section}`}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.headerTitle}>Command Sectors</h2>
              <p className={styles.headerText}>Navigate the functional layers of the interface.</p>
            </div>
            <div className={styles.sectionRule} />
            <a href="/commands/directory" className={styles.sectionLink}>
              View All Directory
            </a>
          </div>

          <div className={styles.sectorsGrid}>
            {homepageSectors.map((sector) => (
              <article
                key={sector.title}
                className={`${styles.sectorCard}${sector.tone === "wide" ? ` ${styles.sectorWide}` : ""}${sector.tone === "utility" ? ` ${styles.sectorUtility}` : ""}`}
              >
                <div className={`${styles.sectorIcon}${styles[`tone${sector.tone[0]?.toUpperCase()}${sector.tone.slice(1)}`] || ""}`} />
                <div>
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                </div>
                {sector.count ? <span className={styles.sectorCount}>{sector.count}</span> : null}
                {sector.chips ? (
                  <div className={styles.chips}>
                    {sector.chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                ) : null}
                {sector.action ? <span className={styles.utilityAction}>{sector.action}</span> : null}
              </article>
            ))}
          </div>
        </section>

        <section className={`shell ${styles.section}`}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.headerTitle}>Essential Ciphers</h2>
              <p className={styles.headerText}>
                The most frequently invoked commands for efficient adventuring. Click the sigil to copy to clipboard.
              </p>
            </div>
          </div>
          <div className={styles.cipherGrid}>
            {essentialCiphers.map((cipher) => (
              <article key={cipher.command} className={`${styles.cipherCard} ${styles[`tone${cipher.accent[0].toUpperCase()}${cipher.accent.slice(1)}`]}`}>
                <div className={styles.cipherTop}>
                  <span>{cipher.command}</span>
                  <span>▢</span>
                </div>
                <h3>{cipher.title}</h3>
                <p>{cipher.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="editorial" className={`shell ${styles.editorial}`}>
          <blockquote>
            &quot;Communication is the sharpest blade in any adventurer&apos;s arsenal.&quot;
          </blockquote>
          <div className={styles.editorialGrid}>
            <article>
              <span>Chat Prefixes</span>
              <p>
                Learn how to route your messages correctly. Using shortcuts like `/p` for party or `/a` for alliance can save critical seconds during high-tier trials.
              </p>
            </article>
            <article>
              <span>Advanced Filters</span>
              <p>
                The console supports complex filtering parameters. Type `/help` in-game for a raw list, or browse our curated categories above for formatted examples.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter meta="Cryptic Studios & Perfect World are not affiliated." />
    </>
  );
}
