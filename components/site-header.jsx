"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GlobalSearch } from "@/components/global-search";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/commands", label: "All Commands" },
  { href: "/categories", label: "Categories" },
  { href: "/emotes", label: "Emotes" },
  { href: "/utility", label: "Utility" },
  { href: "/about", label: "About" }
];

export function SiteHeader({ activePath = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activePath]);

  return (
    <header className="siteHeader">
      <div className="shell siteHeaderInner">
        <Link href="/" className="brand" aria-label="Neverwinter Command Guide home">
          <span className="brandMark" aria-hidden="true">
            NW
          </span>
          <span>Neverwinter Command Guide</span>
        </Link>

        <button
          type="button"
          className={`menuToggle${menuOpen ? " active" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav${menuOpen ? " open" : ""}`}
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === activePath;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navLink${isActive ? " active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={`headerActions${menuOpen ? " open" : ""}`}>
          <GlobalSearch />
        </div>
      </div>
    </header>
  );
}
