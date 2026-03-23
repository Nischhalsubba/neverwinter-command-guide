import styles from "./site-footer.module.css";

export function SiteFooter({
  brand = "© Neverwinter Command Guide - A Fan-Made Resource",
  meta = "For educational purposes only. Trademarks belong to their owners.",
  links = ["Privacy Policy", "Contact", "Github", "Discord"]
}) {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.left}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.meta}>{meta}</p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          {links.map((label) => (
            <a key={label} href="#">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
