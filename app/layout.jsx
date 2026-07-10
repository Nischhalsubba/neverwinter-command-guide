import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import { MotionLayer } from "@/components/motion-layer";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neverwinter Command Guide | Slash Commands, Emotes & Utility",
    template: "%s | Neverwinter Command Guide"
  },
  keywords: [
    "Neverwinter commands",
    "Neverwinter slash commands",
    "Neverwinter emotes",
    "Neverwinter chat commands",
    "Neverwinter utility commands",
    "Neverwinter whisper command",
    "Neverwinter combat log command",
    "Neverwinter screenshot command",
    "Neverwinter alliance chat command",
    "Neverwinter console command guide"
  ],
  description:
    "Search Neverwinter slash commands, whispers, chat shortcuts, emotes, utility tools, screenshot controls, combat-log commands, aliases, and copy-ready examples.",
  applicationName: "Neverwinter Command Guide",
  authors: [{ name: "Nischhal Raj Subba", url: "https://github.com/Nischhalsubba" }],
  creator: "Nischhal Raj Subba",
  publisher: "Nischhal Raj Subba",
  category: "gaming reference",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Neverwinter Command Guide | Slash Commands & Emotes",
    description:
      "Search Neverwinter chat commands, whispers, alliance tools, emotes, utility commands, screenshots, combat logs, aliases, and copy-ready syntax.",
    type: "website",
    siteName: "Neverwinter Command Guide",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Neverwinter Command Guide searchable slash-command reference"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Neverwinter Command Guide | Slash Commands & Emotes",
    description:
      "A searchable Neverwinter reference for chat, whispers, emotes, utility commands, screenshots, combat logs, and copy-ready syntax.",
    images: ["/twitter-image"]
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Neverwinter Command Guide",
    url: siteUrl,
    description:
      "A searchable reference for Neverwinter slash commands, chat tools, whispers, emotes, utility commands, screenshots, combat logs, aliases, and examples.",
    inLanguage: "en",
    creator: {
      "@type": "Person",
      name: "Nischhal Raj Subba",
      url: "https://github.com/Nischhalsubba"
    },
    about: {
      "@type": "VideoGame",
      name: "Neverwinter"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/commands?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <SiteFooter />
        <MotionLayer />
      </body>
    </html>
  );
}
