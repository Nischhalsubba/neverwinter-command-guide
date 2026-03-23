import Link from "next/link";

const guideLinks = [
  { href: "/", label: "Home" },
  { href: "/commands", label: "All Commands" },
  { href: "/categories", label: "Categories" },
  { href: "/emotes", label: "Emotes" },
  { href: "/utility", label: "Utility" },
  { href: "/about", label: "About" }
];

const officialLinks = [
  { href: "https://www.playneverwinter.com/", label: "Official Website" },
  { href: "https://support.playneverwinter.com/hc/en-us/", label: "Official Support" },
  { href: "https://launcher.playneverwinter.com/", label: "Official Launcher" },
  { href: "https://store.steampowered.com/app/109600/Neverwinter/", label: "Official Steam Page" }
];

export function SiteFooter() {
  return (
    <footer className="pageFooter">
      <div className="shell footerGrid">
        <section className="footerPanel cardSurface">
          <div className="footerColumn footerBrandColumn">
            <p className="footerEyebrow">Neverwinter Command Guide</p>
            <h2 className="footerTitle">A cleaner fan-made reference for Neverwinter commands.</h2>
            <p className="footerCopy">
              Built for fast lookup, clearer syntax, and easier navigation across chat commands,
              utility tools, emotes, and player-facing command help.
            </p>
          </div>

          <div className="footerColumn">
            <h3 className="footerHeading">Guide</h3>
            <nav className="footerLinks" aria-label="Guide links">
              {guideLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footerColumn">
            <h3 className="footerHeading">Official Neverwinter</h3>
            <div className="footerLinks">
              {officialLinks.map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="footerLegal">
          <p>
            Neverwinter Command Guide is a fan-made project and is not affiliated with Cryptic
            Studios, Arc Games, Wizards of the Coast, or the official Neverwinter website.
          </p>
          <p>Designed and developed by Archew | Aяcнië.</p>
        </section>
      </div>
    </footer>
  );
}
