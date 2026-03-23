import Link from "next/link";
import { CopyCommandButton } from "@/components/copy-command-button";
import { getCommandUrl } from "@/lib/commands-data";
import styles from "./command-preview-grid.module.css";

export function CommandPreviewGrid({ commands, title, intro }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </div>
      </div>

      <div className={styles.grid}>
        {commands.map((command) => (
          <article key={command.id} className={styles.card}>
            <div className={styles.topline}>
              <span className={styles.badge}>{command.category}</span>
              <div className={styles.actions}>
                <CopyCommandButton value={command.syntax} className={styles.copyButton} />
                <Link href={getCommandUrl(command)} className={styles.detailLink}>
                  Details
                </Link>
              </div>
            </div>
            <code className={styles.syntax}>{command.syntax}</code>
            <h3 className={styles.cardTitle}>
              <Link href={getCommandUrl(command)}>{command.title}</Link>
            </h3>
            <p className={styles.description}>{command.description}</p>
            <p className={styles.meta}>
              <strong>Example:</strong> {command.example}
            </p>
            <p className={styles.meta}>
              <strong>Alias:</strong> {command.aliases?.length ? command.aliases.join(", ") : "No alias"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
