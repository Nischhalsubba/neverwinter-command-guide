import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, getCommandsByCategory } from "@/lib/commands-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "Neverwinter Command Categories",
  description:
    "Browse Neverwinter commands by category including chat, private messages, party and guild tools, emotes, utility, display, and troubleshooting.",
  alternates: {
    canonical: "/categories"
  }
};

export default function CategoriesPage() {
  return (
    <>
      <SiteHeader activePath="/categories" />
      <main className={`shell ${styles.about}`}>
        <section className={`cardSurface ${styles.panel}`}>
          <span className="eyebrow">Categories</span>
          <h1 className="sectionTitle">{categoryPageContent.categories.title}</h1>
          <p className="sectionIntro">{categoryPageContent.categories.intro}</p>
        </section>
        <CommandPreviewGrid title="Chat Commands" commands={getCommandsByCategory("Chat")} />
        <CommandPreviewGrid title="Private Commands" commands={getCommandsByCategory("Private")} />
        <CommandPreviewGrid title="Party and Guild Commands" commands={getCommandsByCategory("Party / Guild")} />
      </main>
    </>
  );
}
