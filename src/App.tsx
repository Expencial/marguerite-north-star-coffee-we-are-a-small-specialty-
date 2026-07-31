import { useEffect, useState, type CSSProperties } from "react";
import rawConfig from "../site.config.json";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hours } from "./components/Hours";
import { Services } from "./components/Services";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import type { SiteConfig, ThemeMode } from "./types";

const config = rawConfig as SiteConfig;
const THEME_STORAGE_KEY = "north-star-theme";

type SiteStyle = CSSProperties & Record<`--${string}`, string>;

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function paletteToStyle(
  palette: SiteConfig["palette"] | SiteConfig["paletteDark"],
): SiteStyle {
  return {
    "--color-background": palette.background,
    "--color-surface": palette.surface,
    "--color-ink": palette.ink,
    "--color-muted": palette.muted,
    "--color-accent": palette.accent,
    "--color-accent-contrast": palette.accentContrast,
    "--color-secondary": palette.secondary,
    "--color-line": palette.line,
    "--font-display": config.fontPair.display,
    "--font-body": config.fontPair.body,
  };
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  useRevealOnScroll();

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

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

  useEffect(() => {
    const activePalette =
      theme === "dark" ? config.paletteDark : config.palette;
    const nextStyle = paletteToStyle(activePalette);

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    for (const [key, value] of Object.entries(nextStyle)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [theme]);

  const activePalette =
    theme === "dark" ? config.paletteDark : config.palette;
  const style = paletteToStyle(activePalette);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="site min-h-screen" id="top" data-theme={theme} style={style}>
      <a className="skip-link" href="#main">
        {config.accessibility.skipToContent}
      </a>
      <Header
        businessName={config.businessName}
        tagline={config.tagline}
        navigation={config.navigation}
        theme={theme}
        themeToggleLabel={
          theme === "dark"
            ? config.accessibility.themeToggleToLight
            : config.accessibility.themeToggleToDark
        }
        onToggleTheme={toggleTheme}
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
