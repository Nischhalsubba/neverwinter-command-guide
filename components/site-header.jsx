import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/commands", label: "All Commands" },
  { href: "/commands#chat-commands", label: "Chat" },
  { href: "/commands#emotes", label: "Emotes" },
  { href: "/commands#utility-commands", label: "Utility" },
  { href: "/about", label: "About" }
];

export function SiteHeader({ activePath = "" }) {
  return (
    <header className="siteHeader">
      <div className="shell siteHeaderInner">
        <Link href="/" className="brand" aria-label="Neverwinter Command Guide home">
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
          Quick search...
        </Link>
      </div>
    </header>
  );
}
