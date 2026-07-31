import { useEffect, type CSSProperties } from "react";
import rawConfig from "../site.config.json";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hours } from "./components/Hours";
import { Services } from "./components/Services";
import type { SiteConfig } from "./types";

const config = rawConfig as SiteConfig;

type SiteStyle = CSSProperties & Record<`--${string}`, string>;

export default function App() {
  useEffect(() => {
    document.documentElement.lang = config.locale;
    document.title = config.meta.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    description?.setAttribute("content", config.meta.description);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = config.fontPair.stylesheetUrl;
    fontLink.dataset.siteFonts = "true";
    document.head.append(fontLink);

    return () => fontLink.remove();
  }, []);

  const style: SiteStyle = {
    "--color-background": config.palette.background,
    "--color-surface": config.palette.surface,
    "--color-ink": config.palette.ink,
    "--color-muted": config.palette.muted,
    "--color-accent": config.palette.accent,
    "--color-accent-contrast": config.palette.accentContrast,
    "--color-secondary": config.palette.secondary,
    "--color-line": config.palette.line,
    "--font-display": config.fontPair.display,
    "--font-body": config.fontPair.body,
  };

  return (
    <div className="site min-h-screen" id="top" style={style}>
      <a className="skip-link" href="#main">
        {config.accessibility.skipToContent}
      </a>
      <Header
        businessName={config.businessName}
        tagline={config.tagline}
        navigation={config.navigation}
      />
      <main id="main">
        <Hero hero={config.hero} />
        <About about={config.about} />
        <Services services={config.services} />
        <Gallery gallery={config.gallery} />
        <Hours hours={config.hours} />
        <Contact businessName={config.businessName} contact={config.contact} />
      </main>
      <Footer
        businessName={config.businessName}
        tagline={config.tagline}
        footer={config.footer}
      />
    </div>
  );
}
