import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, getCommandsByCategory } from "@/lib/commands-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "Neverwinter Utility and Display Commands",
  description:
    "Find Neverwinter utility commands for screenshots, combat logging, FPS limits, movement recovery, display settings, and troubleshooting.",
  alternates: {
    canonical: "/utility"
  }
};

export default function UtilityPage() {
  return (
    <>
      <SiteHeader activePath="/utility" />
      <main className={`shell ${styles.about}`}>
        <section className={`cardSurface ${styles.panel}`}>
          <span className="eyebrow">Utility</span>
          <h1 className="sectionTitle">{categoryPageContent.utility.title}</h1>
          <p className="sectionIntro">{categoryPageContent.utility.intro}</p>
        </section>
        <CommandPreviewGrid
          title="Utility and Display Commands"
          intro="Practical commands for screenshots, performance, recovery, target behavior, coordinates, and client-side setup."
          commands={getCommandsByCategory("Utility")}
        />
      </main>
    </>
  );
}
