import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { directoryRows } from "@/lib/commands-data";
import styles from "./page.module.css";

function toneClass(tone) {
  if (tone === "violet") return styles.toneViolet;
  if (tone === "gold") return styles.toneGold;
  if (tone === "legendary") return styles.toneLegendary;
  return styles.toneTeal;
}

export default function DirectoryPage() {
  return (
    <>
      <SiteHeader active="directory" searchPlaceholder="Quick find..." utilities />
      <main className={styles.page}>
        <section className={`shell ${styles.main}`}>
          <header className={styles.hero}>
            <div className={styles.heroBar} />
            <div>
              <h1 className={styles.title}>Command Directory</h1>
              <p>
                The complete repository of all arcane syntax and system protocols. Filter by category or search specific parameters to find the sigils required for your journey.
              </p>
            </div>
          </header>

          <section className={styles.filters}>
            <div className={styles.searchField}>Search commands, actions, or keywords...</div>
            <button className={styles.filterButton}>All Categories</button>
            <button className={styles.filterButton}>Sort: A-Z</button>
          </section>

          <section className={styles.tableWrap}>
            <div className={styles.tableHeader}>
              <span>Command</span>
              <span>Action</span>
              <span>Category</span>
              <span>Usage</span>
              <span>Execute</span>
            </div>

            {directoryRows.map((row) => (
              <div key={row.command} className={styles.row}>
                <div>
                  <span className={`${styles.commandPill} ${toneClass(row.tone)}`}>{row.command}</span>
                </div>
                <div className={styles.primary}>{row.action}</div>
                <div>
                  <span className={`${styles.categoryTag} ${toneClass(row.tone)}`}>{row.category}</span>
                </div>
                <div className={styles.usage}>{row.usage}</div>
                <div className={styles.execute}>⧉</div>
              </div>
            ))}
          </section>

          <section className={styles.pagination}>
            <span>Showing 1-15 of 248 Entries</span>
            <div className={styles.pages}>
              <button disabled>‹</button>
              <button className={styles.pageActive}>1</button>
              <button>2</button>
              <button>3</button>
              <span>...</span>
              <button>17</button>
              <button>›</button>
            </div>
          </section>
        </section>
      </main>
      <SiteFooter
        brand="© 2024 Neverwinter Command Center. All Rights Reserved."
        meta=""
        links={["Documentation", "API Reference", "Community Hub", "Support"]}
      />
    </>
  );
}
