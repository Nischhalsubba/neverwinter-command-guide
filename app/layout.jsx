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
    default: "Neverwinter Command Guide",
    template: "%s | Neverwinter Command Guide"
  },
  keywords: [
    "Neverwinter commands",
    "Neverwinter slash commands",
    "Neverwinter emotes",
    "Neverwinter chat commands",
    "Neverwinter utility commands",
    "Neverwinter whisper command",
    "Neverwinter combat log"
  ],
  description:
    "A fan-made searchable reference for Neverwinter chat commands, emotes, utility commands, and copy-ready syntax.",
  applicationName: "Neverwinter Command Guide",
  category: "gaming",
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
    title: "Neverwinter Command Guide",
    description:
      "Search Neverwinter commands, chat shortcuts, whispers, emotes, utility commands, and copy-ready syntax.",
    type: "website",
    siteName: "Neverwinter Command Guide",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Neverwinter Command Guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Neverwinter Command Guide",
    description:
      "A fan-made searchable reference for Neverwinter chat commands, emotes, utility commands, and copy-ready syntax.",
    images: ["/twitter-image"]
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        {children}
        <SiteFooter />
        <MotionLayer />
      </body>
    </html>
  );
}
