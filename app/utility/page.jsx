import { CommandPreviewGrid } from "@/components/command-preview-grid";
import { SiteHeader } from "@/components/site-header";
import { categoryPageContent, getCommandsByCategory } from "@/lib/commands-data";
import styles from "../about/page.module.css";

export const metadata = {
  title: "Neverwinter Utility and Display Commands | Screenshots, FPS, Combat Log, and Recovery",
  description:
    "Find Neverwinter utility commands for screenshots, combat logging, FPS limits, movement recovery, display settings, targeting behavior, and troubleshooting.",
  alternates: {
    canonical: "/utility"
  },
  openGraph: {
    title: "Neverwinter Utility and Display Commands",
    description:
      "Browse Neverwinter utility commands for screenshots, combat logs, performance checks, movement recovery, and display settings.",
    url: "/utility"
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
          <p className="sectionIntro">
            This section focuses on the commands players reach for when they need practical results:
            capturing a clean screenshot, checking framerate, recovering from a stuck position,
            adjusting display behavior, or gathering data for troubleshooting and testing.
          </p>
        </section>
        <CommandPreviewGrid
          title="Utility and Display Commands"
          intro="Practical commands for screenshots, combat logging, performance checks, target behavior, coordinate output, and client-side setup."
          commands={getCommandsByCategory("Utility")}
        />
      </main>
    </>
  );
}
