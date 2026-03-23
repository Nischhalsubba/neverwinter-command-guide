"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  categoryShortcuts,
  commands,
  faqItems,
  featuredCommands,
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

const categoryIcons = {
  Chat: "C",
  Private: "P",
  "Party / Guild": "G",
  Utility: "U",
  Emotes: "E",
  Display: "D"
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
      <h3 className={styles.commandTitle}>{command.title}</h3>
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
                <span className={styles.sidebarIcon}>{index === 0 ? "i" : "*"}</span>
                <span>{link.label === "Start Here" ? "Getting Started" : "Top Commands"}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.mainColumn}>
          <section id="start-here" className={styles.heroPanel}>
            <span className="eyebrow">Obsidian Hud</span>
            <h1 className="displayTitle">Accessible Command Documentation</h1>
            <p className={styles.heroText}>
              A user-friendly guide to Neverwinter commands and UI shortcuts, designed
              for clarity.
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
                  Q
                </span>
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search for a command, action, or category..."
                  autoComplete="off"
                />
              </div>
              <button type="submit">Search</button>
            </form>

            <section id="browse-by-category" className={styles.categoryRow} aria-label="Category shortcuts">
              {categoryShortcuts.map((shortcut, index) => (
                <button
                  key={shortcut.id}
                  type="button"
                  className={styles.categoryOrbButton}
                  onClick={() => applyCategory(shortcut.label)}
                >
                  <span className={`${styles.categoryOrb}${index === 0 ? ` ${styles.categoryOrbActive}` : ""}`}>
                    {categoryIcons[shortcut.label]}
                  </span>
                  <span className={styles.categoryLabel}>
                    {{
                      Chat: "Combat",
                      Private: "Movement",
                      "Party / Guild": "Social",
                      Utility: "Utility",
                      Emotes: "Emotes",
                      Display: "Graphics"
                    }[shortcut.label]}
                  </span>
                </button>
              ))}
            </section>
          </section>

          <section id="most-used" className={styles.featuredGrid}>
            {featuredCommands.slice(0, 2).map((command) => (
              <CommandCard key={command.id} command={command} />
            ))}
          </section>

          <section className={styles.directorySection} aria-labelledby="directory-title">
            <div className={styles.directoryHeader}>
              <h2 id="directory-title" className={styles.letterTitle}>
                E
              </h2>
              <span className={styles.directoryLine} aria-hidden="true" />
            </div>

            <div className={styles.azGrid}>
              {letterKeys
                .filter((letter) => letter === "E")
                .flatMap((letter) => groupedCommands[letter])
                .slice(0, 1)
                .map((command) => (
                  <CommandCard key={command.id} command={command} compact />
                ))}
            </div>
          </section>

          <section className={styles.lowerPanels}>
            <div className={styles.filterPanel}>
              <h2 className={styles.lowerTitle}>Browse by Category</h2>
              <div className={styles.filterRow} role="toolbar" aria-label="Command filters">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={category === option}
                    className={`${styles.filterChip}${category === option ? ` ${styles.filterChipActive}` : ""}`}
                    onClick={() => setCategory(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className={styles.panelText}>
                Primary focus: make the player notice and understand the command quickly.
              </p>
            </div>

            <div className={styles.filterPanel}>
              <h2 className={styles.lowerTitle}>Search Results</h2>
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
