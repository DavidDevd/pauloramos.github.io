import type { Metadata, Viewport } from "next";

import { Providers } from "@/app/providers";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [...siteConfig.seo.keywords],
  alternates: {
    canonical: siteConfig.seo.canonicalPath,
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: siteConfig.seo.openGraph.type,
    locale: siteConfig.seo.openGraph.locale,
    url: siteConfig.seo.canonicalPath,
    siteName: siteConfig.name,
    title: siteConfig.seo.openGraph.title,
    description: siteConfig.seo.openGraph.description,
  },
  twitter: {
    card: siteConfig.seo.twitter.card,
    title: siteConfig.seo.twitter.title,
    description: siteConfig.seo.twitter.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
  colorScheme: "dark",
};

function LocaleAttributeScript() {
  const script = `
    document.documentElement.lang = window.location.pathname.startsWith("/pauloramos.github.io/en") || window.location.pathname.startsWith("/en")
      ? "en-US"
      : "pt-BR";
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <LocaleAttributeScript />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
