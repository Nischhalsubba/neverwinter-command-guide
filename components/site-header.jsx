import Link from "next/link";
import styles from "./site-header.module.css";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 1.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.7 9.6 3.8 3.8-1.1 1.1-3.8-3.8 1.1-1.1Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m19 13.2-.1.2 1.3 2.1-1.9 1.9-2.1-1.3-.2.1-.3 2.4h-2.6l-.3-2.4-.2-.1-2.1 1.3-1.9-1.9 1.3-2.1-.1-.2-2.4-.3V10.3l2.4-.3.1-.2-1.3-2.1 1.9-1.9 2.1 1.3.2-.1.3-2.4h2.6l.3 2.4.2.1 2.1-1.3 1.9 1.9-1.3 2.1.1.2 2.4.3v2.6l-2.4.3ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0 1.8c4 0 7 2.2 7 5.2V20H5v-1c0-3 3-5.2 7-5.2Zm0 1.5c-2.9 0-5 1.3-5.4 3.2h10.8c-.4-1.9-2.5-3.2-5.4-3.2Z" />
    </svg>
  );
}

export function SiteHeader({ active = "home", searchPlaceholder = "Quick find...", login = false, utilities = false }) {
  const navItems = [
    { href: "/", label: active === "directory" ? "Manual" : "Home", key: "home" },
    { href: "/commands", label: active === "directory" ? "Commands" : "All Commands", key: "commands" },
    { href: active === "directory" ? "/commands/directory" : "/commands#sectors", label: active === "directory" ? "Grimoire" : "Categories", key: "categories" },
    { href: active === "directory" ? "/commands#editorial" : "/commands#emotes", label: active === "directory" ? "Atlas" : "Emotes", key: "emotes" },
    ...(active === "directory" ? [] : [{ href: "/commands/directory", label: "Utility", key: "utility" }])
  ];

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          Neverwinter Command Guide
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.navLink}${active === item.key ? ` ${styles.navLinkActive}` : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.controls}>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>
              <SearchIcon />
            </span>
            <input
              type="search"
              className={styles.searchInput}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
            />
          </div>
          {login ? <button className={styles.login}>Login</button> : null}
          {utilities ? (
            <>
              <span className={styles.utilityIcon}>
                <GearIcon />
              </span>
              <span className={styles.utilityIcon}>
                <UserIcon />
              </span>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
