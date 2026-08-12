"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { commands, getCommandUrl } from "@/lib/commands-data";
import styles from "./global-search.module.css";

const pages = [
  {
    id: "page-home",
    title: "Homepage",
    href: "/",
    type: "Page",
    description: "Start here for the overview, most-used command groups, and entry points into the full guide.",
    keywords: ["home", "guide", "overview", "start"]
  },
  {
    id: "page-commands",
    title: "All Commands",
    href: "/commands",
    type: "Page",
    description: "Search the full command library by syntax, alias, category, or command name.",
    keywords: ["commands", "archive", "all commands", "directory", "search"]
  },
  {
    id: "page-categories",
    title: "Categories",
    href: "/categories",
    type: "Page",
    description: "Browse commands by chat, private, party and guild, utility, emotes, and display.",
    keywords: ["categories", "chat", "private", "guild", "utility"]
  },
  {
    id: "page-emotes",
    title: "Emotes",
    href: "/emotes",
    type: "Page",
    description: "Browse Neverwinter emote commands for greetings, reactions, screenshots, and roleplay.",
    keywords: ["emotes", "social", "roleplay", "wave", "dance"]
  },
  {
    id: "page-utility",
    title: "Utility",
    href: "/utility",
    type: "Page",
    description: "Find utility commands for combat logs, screenshots, FPS checks, and recovery tools.",
    keywords: ["utility", "combat log", "fps", "screenshot", "stuck"]
  },
  {
    id: "page-about",
    title: "About",
    href: "/about",
    type: "Page",
    description: "Learn how the guide is structured and what it covers.",
    keywords: ["about", "project", "reference"]
  }
];

function normalize(value) {
  return value.toLowerCase().trim();
}

function scoreSearch(item, query) {
  const q = normalize(query);
  if (!q) return 0;

  const title = normalize(item.title || "");
  const syntax = normalize(item.syntax || "");
  const description = normalize(item.description || "");
  const aliases = (item.aliases || []).map(normalize);
  const keywords = (item.keywords || []).map(normalize);
  const category = normalize(item.category || "");

  let score = 0;

  if (title === q || syntax === q) score += 120;
  if (title.startsWith(q) || syntax.startsWith(q)) score += 80;
  if (aliases.includes(q) || keywords.includes(q)) score += 70;
  if (title.includes(q) || syntax.includes(q)) score += 50;
  if (category.includes(q)) score += 30;
  if (description.includes(q)) score += 20;
  if (aliases.some((alias) => alias.includes(q))) score += 20;
  if (keywords.some((keyword) => keyword.includes(q))) score += 20;

  return score;
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 1.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.7 9.6 3.8 3.8-1.1 1.1-3.8-3.8 1.1-1.1Z" />
    </svg>
  );
}

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchId = useId();
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  const searchableCommands = useMemo(
    () =>
      commands.map((command) => ({
        ...command,
        href: getCommandUrl(command),
        type: "Command",
        keywords: [command.category, command.letter]
      })),
    []
  );

  const results = useMemo(() => {
    const allItems = [...pages, ...searchableCommands];

    if (!query.trim()) {
      return {
        pages: pages.slice(0, 4),
        commands: searchableCommands.slice(0, 8)
      };
    }

    const ranked = allItems
      .map((item) => ({
        item,
        score: scoreSearch(item, query)
      }))
      .filter((entry) => entry.score > 0)
      .sort((left, right) => right.score - left.score)
      .map((entry) => entry.item);

    return {
      pages: ranked.filter((item) => item.type === "Page").slice(0, 5),
      commands: ranked.filter((item) => item.type === "Command").slice(0, 10)
    };
  }, [query, searchableCommands]);

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        const target = event.target;
        const isTypingField =
          target instanceof HTMLElement &&
          (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

        if (isTypingField && event.key === "/") {
          return;
        }

        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event) {
      if (!dialogRef.current) {
        return;
      }

      if (!dialogRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !overlayRef.current || !dialogRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.22, ease: "power2.out" });
      gsap.fromTo(
        dialogRef.current,
        { autoAlpha: 0, y: 22, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.34, ease: "power2.out" }
      );
      gsap.fromTo(
        dialogRef.current.querySelectorAll(`.${styles.resultCard}`),
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.26, stagger: 0.03, delay: 0.08, ease: "power2.out" }
      );
    }, dialogRef);

    return () => context.revert();
  }, [open, query]);

  return (
    <>
      <button type="button" className="quickSearchLink" onClick={() => setOpen(true)}>
        <span className="quickSearchIcon" aria-hidden="true">
          <IconSearch />
        </span>
        <span className="quickSearchText">Search</span>
        <span className="quickSearchShortcut" aria-hidden="true">
          Ctrl K
        </span>
      </button>

      {open ? (
        <div ref={overlayRef} className={styles.overlay} role="presentation" onClick={() => setOpen(false)}>
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby={searchId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.searchBar}>
              <span className={styles.searchIcon} aria-hidden="true">
                <IconSearch />
              </span>
              <label htmlFor={searchId} className="srOnly">
                Search pages and commands
              </label>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search commands, aliases, pages, categories, screenshots, whispers..."
                autoFocus
              />
              <button type="button" className={styles.closeButton} onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            <div className={styles.metaRow}>
              <p>Global search across pages, command names, syntax, aliases, examples, and categories.</p>
              <p>Shortcuts: <kbd>Ctrl</kbd> + <kbd>K</kbd> or <kbd>/</kbd></p>
            </div>

            <div className={styles.resultsGrid}>
              <section className={styles.resultsSection} aria-label="Pages">
                <h2>Pages</h2>
                <div className={styles.resultList}>
                  {results.pages.length ? (
                    results.pages.map((item) => (
                      <Link key={item.id} href={item.href} className={styles.resultCard} onClick={() => setOpen(false)}>
                        <span className={styles.resultType}>{item.type}</span>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </Link>
                    ))
                  ) : (
                    <p className={styles.emptyState}>No page results for this search.</p>
                  )}
                </div>
              </section>

              <section className={styles.resultsSection} aria-label="Commands">
                <h2>Commands</h2>
                <div className={styles.resultList}>
                  {results.commands.length ? (
                    results.commands.map((item) => (
                      <Link key={item.id} href={item.href} className={styles.resultCard} onClick={() => setOpen(false)}>
                        <span className={styles.resultType}>{item.category}</span>
                        <strong>{item.title}</strong>
                        <code>{item.syntax}</code>
                        <p>{item.description}</p>
                      </Link>
                    ))
                  ) : (
                    <p className={styles.emptyState}>No command results for this search.</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
