import Link from "next/link";

const navItems = [
  { href: "/commands", label: "All Commands" },
  { href: "/commands#browse-by-category", label: "Categories" },
  { href: "/commands#most-used", label: "Most Used" },
  { href: "/commands#developer-tricks", label: "Dev Tricks" },
  { href: "/commands#directory-title", label: "Emotes" },
  { href: "/commands#directory-title", label: "Utility" }
];

export function SiteHeader({ activePath = "" }) {
  return (
    <header className="siteHeader">
      <div className="shell siteHeaderInner">
        <Link href="/commands" className="brand" aria-label="Neverwinter Command Guide home">
          <span className="brandMark" aria-hidden="true">
            NW
          </span>
          <span>Neverwinter Command Guide</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              item.href === activePath ||
              (activePath.startsWith("/commands") && item.href === "/commands");

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

        <Link href="/commands#command-search" className="quickSearchLink">
          Search grimoire...
        </Link>
      </div>
    </header>
  );
}
