import { notFound } from "next/navigation";
import { CopyCommandButton } from "@/components/copy-command-button";
import { SiteHeader } from "@/components/site-header";
import { getAllCommands, getCommandBySlug, getCommandUrl } from "@/lib/commands-data";
import { siteUrl } from "@/lib/site";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllCommands().map((command) => ({ slug: command.id }));
}

export function generateMetadata({ params }) {
  const command = getCommandBySlug(params.slug);

  if (!command) {
    return {};
  }

  return {
    title: `${command.title} Command | ${command.syntax}`,
    description: `${command.title}: ${command.description} Find syntax, aliases, example usage, and command details for Neverwinter players.`,
    alternates: {
      canonical: getCommandUrl(command)
    },
    openGraph: {
      title: `${command.title} Command | Neverwinter Command Guide`,
      description: `${command.title}: ${command.description}`,
      url: getCommandUrl(command)
    }
  };
}

export default function CommandDetailPage({ params }) {
  const command = getCommandBySlug(params.slug);

  if (!command) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${command.title} command reference`,
    description: command.description,
    url: `${siteUrl}${getCommandUrl(command)}`,
    about: {
      "@type": "SoftwareApplication",
      name: "Neverwinter"
    }
  };

  return (
    <>
      <SiteHeader activePath="/commands" />
      <main className={`shell ${styles.page}`}>
        <section className={styles.hero}>
          <span className="eyebrow">{command.category}</span>
          <h1 className="sectionTitle">{command.title}</h1>
          <p className={styles.description}>{command.description}</p>
          <div className={styles.syntaxRow}>
            <code className={styles.syntax}>{command.syntax}</code>
            <CopyCommandButton value={command.syntax} className={styles.copyButton} />
          </div>
        </section>

        <section className={styles.detailGrid}>
          <article className={styles.panel}>
            <h2>What this command does</h2>
            <p>
              {command.title} is a Neverwinter slash command used to {command.description.charAt(0).toLowerCase() + command.description.slice(1)}
            </p>
            {command.noteText ? <p>{command.noteText}</p> : null}
          </article>
          <article className={styles.panel}>
            <h2>Example usage</h2>
            <code>{command.example}</code>
            <p>
              Use this example as a starting point, then replace the variable parts with your own
              target, message, value, or preferred setting before running the command in game.
            </p>
          </article>
          <article className={styles.panel}>
            <h2>Aliases</h2>
            <p>
              {command.aliases?.length
                ? `${command.aliases.join(", ")}. These variants can help when you remember the short form before the full command.`
                : "No alias is currently documented for this command."}
            </p>
          </article>
          <article className={styles.panel}>
            <h2>Command Category</h2>
            <p>
              This command is grouped under <strong>{command.category}</strong>, which helps players
              browse similar commands by intent instead of scanning the full directory.
            </p>
          </article>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
