import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { archiveGroups } from "@/lib/commands-data";
import styles from "./page.module.css";

function ArchiveCard({ item }) {
  return (
    <article className={`${styles.card} ${styles[`accent${item.accent[0].toUpperCase()}${item.accent.slice(1)}`]}`}>
      <div className={styles.cardHeader}>
        <span className={styles.cardBadge}>{item.category}</span>
        <button className={styles.copyButton} type="button">
          ⧉
        </button>
      </div>
      <div className={styles.syntax}>{item.syntax}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className={styles.aliasRow}>
        <span>Alias:</span>
        <code>{item.alias}</code>
      </div>
    </article>
  );
}

export default function CommandsPage() {
  return (
    <>
      <SiteHeader active="commands" searchPlaceholder="Search grimoire..." />
      <main className={styles.page}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <div className={styles.sidebarHeader}>
              <h2>Categories</h2>
              <span>Filter Commands</span>
            </div>
            {["All", "Chat", "Whispers", "Group", "Emotes", "Utility", "Graphics", "Team"].map((item, index) => (
              <button key={item} className={`${styles.sideButton}${index === 0 ? ` ${styles.sideButtonActive}` : ""}`} type="button">
                {item}
              </button>
            ))}
            <div className={styles.systemWrap}>
              <button className={styles.sideButton} type="button">
                System
              </button>
            </div>
          </div>
        </aside>

        <section className={styles.content}>
          <header className={styles.header}>
            <span className="eyebrow">Technical Reference</span>
            <h1 className="sectionTitle">Command Archive</h1>
            <p>
              A comprehensive repository of Slash commands, UI shortcuts, and arcane
              parameters for the Neverwinter engine.
            </p>
          </header>

          <div className={styles.searchBar}>
            <div className={styles.searchInput}>Filter commands by name, alias, or function...</div>
            <button className={styles.searchAction}>Search ↯</button>
          </div>

          <div className={styles.groupStack}>
            {Object.entries(archiveGroups).map(([letter, items]) => (
              <section key={letter} className={styles.groupSection}>
                <div className={styles.groupHeader}>
                  <h2>{letter}</h2>
                  <div className={styles.groupRule} />
                </div>
                <div className={styles.grid}>
                  {items.map((item) => (
                    <ArchiveCard key={item.syntax} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
