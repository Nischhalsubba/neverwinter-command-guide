import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const commandFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-command",
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
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Neverwinter Command Guide",
    description:
      "Search Neverwinter commands, chat shortcuts, whispers, emotes, utility commands, and copy-ready syntax.",
    type: "website",
    siteName: "Neverwinter Command Guide"
  },
  twitter: {
    card: "summary_large_image",
    title: "Neverwinter Command Guide",
    description:
      "A fan-made searchable reference for Neverwinter chat commands, emotes, utility commands, and copy-ready syntax."
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable} ${commandFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
