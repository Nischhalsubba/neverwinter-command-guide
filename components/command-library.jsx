"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { CopyCommandButton } from "@/components/copy-command-button";
import {
  categoryShortcuts,
  commands,
  getCommandUrl,
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

function CommandCard({ command, compact = false }) {
  const aliasText = command.aliases?.length ? command.aliases.join(", ") : "No alias";

  return (
    <article className={`${styles.commandCard}${compact ? ` ${styles.commandCardCompact}` : ""}`}>
      <div className={styles.cardGlowTop} aria-hidden="true" />
      <div className={styles.commandTopline}>
        <span className={styles.categoryBadge}>{command.category}</span>
        <CopyCommandButton value={command.syntax} className={styles.copyButton} />
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

  function applyCategory(nextCategory) {
    setCategory(nextCategory);
  }

  function applySearch(nextQuery) {
    setQuery(nextQuery);
    setCategory("All");
  }

  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>

      <main id="main-content" className={`shell ${styles.pageShell}`}>
        <section id="start-here" className={`${styles.heroPanel} cardSurface`} data-reveal data-tilt>
          <span className="eyebrow">Player Command Guide</span>
          <h1 className="displayTitle">All Neverwinter Commands</h1>
          <p className={styles.heroText}>
            Search the full command library by keyword, command syntax, alias, or category. Every
            result is written in plain language so players can understand what each command does at a glance.
          </p>

          <form
            id="command-search"
            className={styles.searchForm}
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
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
            <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>
              Reset
            </button>
          </form>

          <div className={styles.filterPanel} data-reveal>
            <div className={styles.filterHeader}>
              <h2 className={styles.lowerTitle}>Filter Commands</h2>
              <p className={styles.resultCount}>
                {filteredCommands.length} {filteredCommands.length === 1 ? "command" : "commands"} found
              </p>
            </div>
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
            <div className={styles.categoryRow} aria-label="Category shortcuts">
              {categoryShortcuts.map((shortcut, index) => {
                const Icon = categoryIcons[shortcut.label];

                return (
                  <button
                    key={shortcut.id}
                    type="button"
                    className={styles.categoryOrbButton}
                    onClick={() => applyCategory(shortcut.label)}
                  >
                    <span className={`${styles.categoryOrb}${category === shortcut.label || (category === "All" && index === 0) ? ` ${styles.categoryOrbActive}` : ""}`}>
                      <Icon />
                    </span>
                    <span className={styles.categoryLabel}>{shortcut.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.directorySection} aria-labelledby="directory-title" data-reveal>
          <div className={styles.directoryHeader}>
            <h2 id="directory-title" className={styles.letterTitle}>
              Command Directory
            </h2>
            <span className={styles.directoryLine} aria-hidden="true" />
          </div>
          <p className={styles.sectionLead}>
            This page lists every command currently included in the guide. Use the search box and category filters above to narrow the list quickly.
          </p>

          {filteredCommands.length ? (
            <div className={styles.listGrid}>
              {filteredCommands.map((command) => (
                <CommandCard key={command.id} command={command} compact />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>No commands found</h3>
              <p>Try a shorter keyword, search an alias, or switch back to a broader category.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
