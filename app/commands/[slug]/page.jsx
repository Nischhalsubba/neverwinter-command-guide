import { notFound } from "next/navigation";
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
    title: `${command.title} | ${command.syntax}`,
    description: `${command.title}: ${command.description}`,
    alternates: {
      canonical: getCommandUrl(command)
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
    url: `${siteUrl}${getCommandUrl(command)}`
  };

  return (
    <>
      <SiteHeader activePath="/commands" />
      <main className={`shell ${styles.page}`}>
        <section className={styles.hero}>
          <span className="eyebrow">{command.category}</span>
          <h1 className="sectionTitle">{command.title}</h1>
          <p className={styles.description}>{command.description}</p>
          <code className={styles.syntax}>{command.syntax}</code>
        </section>

        <section className={styles.detailGrid}>
          <article className={styles.panel}>
            <h2>What this command does</h2>
            <p>{command.description}</p>
            {command.noteText ? <p>{command.noteText}</p> : null}
          </article>
          <article className={styles.panel}>
            <h2>Example</h2>
            <code>{command.example}</code>
            <p>Use this example as a starting point, then replace the variable parts with your own target, message, or value.</p>
          </article>
          <article className={styles.panel}>
            <h2>Aliases</h2>
            <p>{command.aliases?.length ? command.aliases.join(", ") : "No alias is currently documented for this command."}</p>
          </article>
          <article className={styles.panel}>
            <h2>Command Category</h2>
            <p>{command.category}</p>
          </article>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
