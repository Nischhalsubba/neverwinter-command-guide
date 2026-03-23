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
  description:
    "A fan-made searchable reference for Neverwinter chat commands, emotes, utility commands, and copy-ready syntax.",
  applicationName: "Neverwinter Command Guide",
  openGraph: {
    title: "Neverwinter Command Guide",
    description:
      "Search Neverwinter commands, chat shortcuts, whispers, emotes, utility commands, and copy-ready syntax.",
    type: "website"
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
