"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import {
  categoryShortcuts,
  commands,
  developerTricks,
  faqItems,
  featuredCommands,
  getCommandUrl,
  quickHelpLinks,
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

function IconSword() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 4.5 19.5 2l-2.5 5-7 7 2 2-1.5 1.5-2-2L6 18l-1.5-1.5 2.5-2.5-2-2L6.5 10l2 2 6-7Z" />
    </svg>
  );
}

function IconMove() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 8.5 5.5h2.5V10H5.5V7.5L2 11l3.5 3.5V12H11v5.5H8.5L12 21l3.5-3.5H13V12h5.5v2.5L22 11l-3.5-3.5V10H13V5.5h2.5L12 2Z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm8 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM3 19a5.5 5.5 0 0 1 11 0v1H3v-1Zm12 1v-1a5.9 5.9 0 0 0-1.2-3.5A4.8 4.8 0 0 1 21 19v1h-6Z" />
    </svg>
  );
}

function IconTools() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14.5 4 1.8 1.8-2.7 2.7 1.9 1.9 2.7-2.7L20 9.5l-2.9 2.9 2.4 2.4-2.2 2.2-2.4-2.4-7 7H4v-3.6l7-7-2.4-2.4 2.2-2.2 2.4 2.4L16.1 4h-1.6ZM7 3.5A3.5 3.5 0 0 0 4.7 9.7l4.9-4.9A3.5 3.5 0 0 0 7 3.5Z" />
    </svg>
  );
}

function IconSmile() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 6.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm6 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-7 4.1a5.3 5.3 0 0 0 8 0l-1.1-.9a3.9 3.9 0 0 1-5.8 0l-1.1.9Z" />
    </svg>
  );
}

function IconDisplay() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6v2h2.5v1.5h-9V19H10v-2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 1.5v9h16v-9H4Zm4 2 3 4 2-2.5 3 3.5H8Z" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 4a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 12 7Zm-1 4v6h2v-6h-2Z" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4h10v2h2a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4h-.4A5.5 5.5 0 0 1 13 15.8V18h3v2H8v-2h3v-2.2A5.5 5.5 0 0 1 8.4 12H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h2V4Zm10 4V7h2v1a2.5 2.5 0 0 1-2 2.4V8ZM5 8V7h2v3.4A2.5 2.5 0 0 1 5 8Z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 1.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.7 9.6 3.8 3.8-1.1 1.1-3.8-3.8 1.1-1.1Z" />
    </svg>
  );
}

const categoryIcons = {
  Chat: IconSword,
  Private: IconMove,
  "Party / Guild": IconUsers,
  Utility: IconTools,
  Emotes: IconSmile,
  Display: IconDisplay
};

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

function CommandCard({ command, compact = false }) {
  const aliasText = command.aliases?.length ? command.aliases.join(", ") : "No alias";

  return (
    <article className={`${styles.commandCard}${compact ? ` ${styles.commandCardCompact}` : ""}`}>
      <div className={styles.cardGlowTop} aria-hidden="true" />
      <div className={styles.commandTopline}>
        <span className={styles.categoryBadge}>{command.category}</span>
        <CopyButton syntax={command.syntax} />
      </div>

      <code className={styles.syntaxBlock}>{command.syntax}</code>
      <h3 className={styles.commandTitle}>
        <Link href={getCommandUrl(command)}>{command.title}</Link>
      </h3>
      <p className={styles.commandDescription}>{command.description}</p>
      <p className={styles.commandMeta}>
        <strong>Example:</strong> <code>{command.example}</code>
      </p>
      <p className={styles.commandMeta}>
        <strong>Alias:</strong> {aliasText}
      </p>

      {command.note && command.noteText ? (
        <p className={styles.commandNote}>
          <strong>{command.note}</strong> {command.noteText}
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

  function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function applyCategory(nextCategory) {
    setCategory(nextCategory);
    scrollTo("directory-title");
  }

  function applySearch(nextQuery) {
    setQuery(nextQuery);
    setCategory("All");
    scrollTo("directory-title");
  }

  function handleSidebarAction(link) {
    if (link.query) {
      applySearch(link.query);
      return;
    }

    if (link.category) {
      applyCategory(link.category);
      return;
    }

    scrollTo(link.href.replace("#", ""));
  }

  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>

      <main id="main-content" className={`shell ${styles.pageShell}`}>
        <aside className={styles.sidebar} aria-label="Section links">
          <div className={styles.sidebarRail}>
            {sidebarLinks.slice(0, 2).map((link, index) => (
              <button
                key={link.id}
                type="button"
                className={`${styles.sidebarButton}${index === 0 ? ` ${styles.sidebarButtonActive}` : ""}`}
                onClick={() => handleSidebarAction(link)}
              >
                <span className={styles.sidebarIcon}>
                  {index === 0 ? <IconInfo /> : <IconTrophy />}
                </span>
                <span>{link.label === "Start Here" ? "Getting Started" : "Top Commands"}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.mainColumn}>
          <section id="start-here" className={styles.heroPanel}>
            <span className="eyebrow">Player Command Guide</span>
            <h1 className="displayTitle">Search All Neverwinter Commands</h1>
            <p className={styles.heroText}>
              Find chat, whisper, guild, alliance, emote, display, and utility commands in one
              searchable Neverwinter reference built for quick lookup and cleaner syntax.
            </p>

            <form
              id="command-search"
              className={styles.searchForm}
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
                scrollTo("directory-title");
              }}
            >
              <label htmlFor={searchId} className="srOnly">
                Search commands, aliases, or categories
              </label>
              <div className={styles.searchInputWrap}>
                <span className={styles.searchIcon} aria-hidden="true">
                  <IconSearch />
                </span>
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search /all, /tell, /r, /CombatLog, /screenshot_jpg"
                  autoComplete="off"
                />
              </div>
              <button type="submit">Search</button>
            </form>

            <section id="browse-by-category" className={styles.categoryRow} aria-label="Category shortcuts">
              {categoryShortcuts.map((shortcut, index) => {
                const Icon = categoryIcons[shortcut.label];

                return (
                  <button
                    key={shortcut.id}
                    type="button"
                    className={styles.categoryOrbButton}
                    onClick={() => applyCategory(shortcut.label)}
                  >
                    <span className={`${styles.categoryOrb}${index === 0 ? ` ${styles.categoryOrbActive}` : ""}`}>
                      <Icon />
                    </span>
                    <span className={styles.categoryLabel}>
                      {shortcut.label}
                    </span>
                  </button>
                );
              })}
            </section>
          </section>

          <section id="most-used" className={styles.commonSection} aria-labelledby="most-used-title">
            <div className={styles.directoryHeader}>
              <h2 id="most-used-title" className={styles.letterTitle}>
                Most Used Commands
              </h2>
              <span className={styles.directoryLine} aria-hidden="true" />
            </div>
            <p className={styles.sectionLead}>
              Start with the commands players reach for most often during everyday play, from
              alliance chat and whispers to screenshots, combat logs, and stuck recovery.
            </p>
            <div className={styles.featuredGrid}>
              {featuredCommands.slice(0, 6).map((command) => (
                <CommandCard key={command.id} command={command} />
              ))}
            </div>
          </section>

          <section className={styles.directorySection} aria-labelledby="directory-title">
            <div className={styles.directoryHeader}>
              <h2 id="directory-title" className={styles.letterTitle}>
                All Commands
              </h2>
              <span className={styles.directoryLine} aria-hidden="true" />
            </div>
            <p className={styles.sectionLead}>
              Browse the full command library by category, search term, alias, or letter. This
              section is designed for complete command discovery when you need more than the common
              shortcuts.
            </p>

            <div className={styles.lowerPanels}>
              <div className={styles.filterPanel}>
                <h3 className={styles.lowerTitle}>Browse by Category</h3>
                <div className={styles.filterRow} role="toolbar" aria-label="Command filters">
                  {filterOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={category === option}
                      className={`${styles.filterChip}${category === option ? ` ${styles.filterChipActive}` : ""}`}
                      onClick={() => applyCategory(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <p className={styles.panelText}>
                  Filter the full library by category to narrow the list to chat, private,
                  party and guild, emotes, utility, or display commands.
                </p>
              </div>

              <div className={styles.filterPanel}>
                <h3 className={styles.lowerTitle}>Search Results</h3>
                {filteredCommands.length ? (
                  <div className={styles.resultList}>
                    {filteredCommands.slice(0, 4).map((command) => (
                      <button
                        key={command.id}
                        type="button"
                        className={styles.resultItem}
                        onClick={() => applySearch(command.syntax)}
                      >
                        <span>{command.syntax}</span>
                        <small>{command.title}</small>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyInline}>
                    <p>No commands found.</p>
                    <p className={styles.emptyHint}>
                      Try a shorter keyword, search an alias, or browse a category instead. You
                      can search by command name, alias, or category.
                    </p>
                    <div className={styles.emptyActions}>
                      <button type="button" onClick={() => applyCategory("Chat")}>
                        Chat Commands
                      </button>
                      <button type="button" onClick={() => applyCategory("Utility")}>
                        Utility Commands
                      </button>
                      <button type="button" onClick={() => applyCategory("Emotes")}>
                        Emotes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.azSections}>
              {letterKeys.map((letter) => (
                <section key={letter} className={styles.azSection} aria-labelledby={`letter-${letter}`}>
                  <div className={styles.azHeader}>
                    <h3 id={`letter-${letter}`} className={styles.azLetter}>
                      {letter}
                    </h3>
                    <span className={styles.azDivider} aria-hidden="true" />
                  </div>
                  <div className={styles.azGrid}>
                    {groupedCommands[letter].map((command) => (
                      <CommandCard key={command.id} command={command} compact />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="developer-tricks" className={styles.devSection} aria-labelledby="dev-title">
            <div className={styles.directoryHeader}>
              <h2 id="dev-title" className={styles.letterTitle}>
                Developer Tricks
              </h2>
              <span className={styles.directoryLine} aria-hidden="true" />
            </div>
            <p className={styles.sectionLead}>
              These are practical testing and documentation commands used for parser setup,
              screenshots, performance checks, and environment troubleshooting.
            </p>
            <div className={styles.azGrid}>
              {developerTricks.map((command) => (
                <CommandCard key={command.id} command={command} compact />
              ))}
            </div>
          </section>

          <section className={styles.helpStrip}>
            {quickHelpLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                className={styles.helpLink}
                onClick={() => {
                  if (link.query) {
                    applySearch(link.query);
                    return;
                  }

                  if (link.category) {
                    applyCategory(link.category);
                  }
                }}
              >
                {link.label}
              </button>
            ))}
          </section>

          <section className={styles.faqSection} aria-labelledby="faq-title">
            <h2 id="faq-title" className={styles.lowerTitle}>
              Frequently Asked Questions
            </h2>
            <div className={styles.faqList}>
              {faqItems.map((item, index) => (
                <FaqItem key={item.question} item={item} index={index} />
              ))}
            </div>
          </section>

          <footer className={styles.footerPanel}>
            <div className={styles.footerLeft}>
              <p className={styles.footerBrand}>
                Neverwinter Command Guide - A Fan Mods Resource
              </p>
              <p className={styles.footerMeta}>
                Fan educational reference only. Trademarks belong to their owners.
              </p>
            </div>

            <nav className={styles.footerLinks} aria-label="Footer">
              <a href="#">Privacy Policy</a>
              <a href="#">Contact</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                Github
              </a>
              <a href="#">Discord</a>
            </nav>
          </footer>
        </div>
      </main>
    </>
  );
}
