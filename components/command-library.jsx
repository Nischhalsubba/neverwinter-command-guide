"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  categoryShortcuts,
  commands,
  faqItems,
  featuredCommands,
  sidebarLinks
} from "@/lib/commands-data";
import styles from "./command-library.module.css";

const filterOptions = [
  "All",
  "Chat",
  "Private",
  "Party / Guild",
  "Utility",
  "Emotes",
  "Display"
];

function normalize(value) {
  return value.toLowerCase().trim();
}

function matchesSearch(command, query) {
  const haystack = [
    command.syntax,
    command.title,
    command.description,
    command.category,
    command.example,
    ...(command.aliases || [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function groupByLetter(items) {
  return items.reduce((accumulator, command) => {
    const letter = command.letter || "#";
    if (!accumulator[letter]) {
      accumulator[letter] = [];
    }

    accumulator[letter].push(command);
    return accumulator;
  }, {});
}

function CopyButton({ syntax }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(syntax);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className={styles.copyButton} onClick={handleCopy}>
      {copied ? "Copied" : "Copy"}
      <span className="srOnly"> command syntax {syntax}</span>
    </button>
  );
}

function CommandCard({ command }) {
  return (
    <article className={styles.commandCard}>
      <div className={styles.commandTopline}>
        <span className={styles.categoryBadge}>{command.category}</span>
        <CopyButton syntax={command.syntax} />
      </div>

      <code className={styles.syntax}>{command.syntax}</code>
      <h3 className={styles.commandTitle}>{command.title}</h3>
      <p className={styles.commandDescription}>{command.description}</p>

      {command.example ? (
        <p className={styles.commandMeta}>
          <strong>Example:</strong> <code>{command.example}</code>
        </p>
      ) : null}

      {command.aliases?.length ? (
        <p className={styles.commandMeta}>
          <strong>Aliases:</strong> {command.aliases.join(", ")}
        </p>
      ) : null}

      {command.note && command.noteText ? (
        <p className={styles.commandNote}>
          <strong>{command.note}:</strong> {command.noteText}
        </p>
      ) : null}
    </article>
  );
}

function FaqItem({ item, index }) {
  const id = `faq-${index}`;

  return (
    <details className={styles.faqItem}>
      <summary aria-controls={id}>{item.question}</summary>
      <p id={id}>{item.answer}</p>
    </details>
  );
}

export function CommandLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const searchId = useId();

  const normalizedQuery = normalize(query);

  const filteredCommands = useMemo(() => {
    return commands.filter((command) => {
      const matchesCategory = category === "All" || command.category === category;
      const matchesText = !normalizedQuery || matchesSearch(command, normalizedQuery);
      return matchesCategory && matchesText;
    });
  }, [category, normalizedQuery]);

  const groupedCommands = useMemo(() => groupByLetter(filteredCommands), [filteredCommands]);
  const letterKeys = useMemo(() => Object.keys(groupedCommands).sort(), [groupedCommands]);

  function handleSidebarAction(link) {
    if (link.category) {
      setCategory(link.category);
    }

    if (link.query) {
      setQuery(link.query);
    }

    const targetId = link.href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>

      <main id="main-content" className={`shell ${styles.pageShell}`}>
        <aside className={styles.sidebar} aria-label="Section links">
          <div className={`cardSurface ${styles.sidebarCard}`}>
            <p className={styles.sidebarHeading}>On this page</p>
            <nav className={styles.sidebarNav}>
              {sidebarLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleSidebarAction(link)}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className={styles.mainColumn}>
          <section id="start-here" className={`${styles.hero} cardSurface`}>
            <div className={styles.heroCopy}>
              <span className="eyebrow">Player Command Guide</span>
              <h1 className="displayTitle">Search All Neverwinter Commands</h1>
              <p className="sectionIntro">
                Find chat, whisper, guild, alliance, emote, and utility commands in one
                clean searchable guide built for fast lookup and copy-ready syntax.
              </p>

              <form id="command-search" className={styles.searchForm} role="search">
                <label htmlFor={searchId} className="srOnly">
                  Search commands, aliases, or categories
                </label>
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search /all, /tell, /r, /combatlog, /screenshot"
                  autoComplete="off"
                />
                <button type="button" onClick={() => document.getElementById(searchId)?.focus()}>
                  Search
                </button>
              </form>

              <div className={styles.searchStats} aria-live="polite">
                <span>{filteredCommands.length} matching commands</span>
                <span>Search commands, aliases, examples, and categories</span>
              </div>
            </div>
          </section>

          <section className={styles.categorySection} aria-labelledby="browse-by-category">
            <div className={styles.sectionHeader}>
              <h2 id="browse-by-category" className="sectionTitle">
                Browse by Category
              </h2>
              <p className="sectionIntro">
                Use the categories players actually think in when searching for commands
                during play.
              </p>
            </div>

            <div className={styles.categoryGrid}>
              {categoryShortcuts.map((shortcut) => {
                const isActive = category === shortcut.label;

                return (
                  <button
                    key={shortcut.id}
                    type="button"
                    className={`${styles.categoryPill}${isActive ? ` ${styles.categoryPillActive}` : ""}`}
                    onClick={() => setCategory(shortcut.label)}
                  >
                    <span>{shortcut.label}</span>
                    <small>{shortcut.blurb}</small>
                  </button>
                );
              })}
              <button
                type="button"
                className={`${styles.categoryPill}${category === "All" ? ` ${styles.categoryPillActive}` : ""}`}
                onClick={() => setCategory("All")}
              >
                <span>All</span>
                <small>Reset the filter and browse the full reference.</small>
              </button>
            </div>
          </section>

          <section id="most-used" className={styles.contentSection} aria-labelledby="most-used-title">
            <div className={styles.sectionHeader}>
              <h2 id="most-used-title" className="sectionTitle">
                Most Used Commands
              </h2>
              <p className="sectionIntro">
                Start with the commands players use most often during normal play.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {featuredCommands.map((command) => (
                <CommandCard key={command.id} command={command} />
              ))}
            </div>
          </section>

          <section className={styles.directorySection} aria-labelledby="directory-title">
            <div className={styles.sectionHeader}>
              <h2 id="directory-title" className="sectionTitle">
                Browse Commands A-Z
              </h2>
              <p className="sectionIntro">
                Use search for the fastest lookup, or browse commands alphabetically if
                you want to explore the full reference.
              </p>
            </div>

            <div className={styles.filterRow} role="toolbar" aria-label="Command filters">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`${styles.filterChip}${category === option ? ` ${styles.filterChipActive}` : ""}`}
                  onClick={() => setCategory(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {filteredCommands.length ? (
              <div className={styles.letterSections}>
                {letterKeys.map((letter) => (
                  <section
                    key={letter}
                    className={styles.letterGroup}
                    aria-labelledby={`letter-${letter}`}
                  >
                    <div className={styles.letterHeader}>
                      <h3 id={`letter-${letter}`}>{letter}</h3>
                    </div>
                    <div className={styles.cardGrid}>
                      {groupedCommands[letter].map((command) => (
                        <CommandCard key={command.id} command={command} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className={`cardSurface ${styles.emptyState}`}>
                <h3>No commands found</h3>
                <p>
                  Try a shorter keyword, search an alias, or browse a category instead.
                </p>
                <div className={styles.emptyActions}>
                  {["Chat", "Utility", "Emotes", "Most Used Commands"].map((item) =>
                    item === "Most Used Commands" ? (
                      <a key={item} href="#most-used">
                        {item}
                      </a>
                    ) : (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </section>

          <section className={styles.faqSection} aria-labelledby="faq-title">
            <div className={styles.sectionHeader}>
              <h2 id="faq-title" className="sectionTitle">
                Frequently Asked Questions
              </h2>
              <p className="sectionIntro">
                Short answers for the most common questions about this fan-made command
                reference.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqItems.map((item, index) => (
                <FaqItem key={item.question} item={item} index={index} />
              ))}
            </div>
          </section>

          <footer className="pageFooter">
            <div className="footerGrid">
              <div>
                <h2 className={styles.footerTitle}>Neverwinter Command Guide</h2>
                <p className="muted">
                  A cleaner fan-made reference for Neverwinter chat commands, emotes,
                  utility commands, and searchable command help.
                </p>
              </div>

              <nav className={styles.footerLinks} aria-label="Footer">
                <Link href="/commands">All Commands</Link>
                <a href="#chat-commands">Chat</a>
                <a href="#emotes">Emotes</a>
                <a href="#utility-commands">Utility</a>
                <Link href="/about">About</Link>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </nav>

              <p className="muted">Built for fast command lookup by Neverwinter players.</p>
              <p className="muted">
                Neverwinter Command Guide is a fan-made project and is not affiliated
                with the official Neverwinter game or its publishers.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
