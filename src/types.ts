export type Locale = "fr" | "en";

export interface LinkConfig {
  label: string;
  href: string;
}

export interface SiteConfig {
  businessName: string;
  locale: Locale;
  tagline: string;
  meta: {
    title: string;
    description: string;
  };
  accessibility: {
    skipToContent: string;
  };
  navigation: {
    ariaLabel: string;
    items: LinkConfig[];
    contactLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: LinkConfig;
    secondaryCta: LinkConfig;
    note: string;
    visualLabel: string;
    visualCaption: string;
    visualAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    highlight: string;
    imageLabel: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      icon: "cup" | "laptop" | "heart" | "grain" | "sun" | "cake";
      title: string;
      description: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      label: string;
      caption: string;
      alt: string;
      colors: [string, string];
    }>;
  };
  hours: {
    eyebrow: string;
    title: string;
    note: string;
    days: Array<{
      label: string;
      value: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    address: string;
    phone: string;
    phoneLink: string;
    email: string;
    emailLink: string;
    whatsappLink: string;
    whatsappLabel: string;
    mapLink: string;
    mapLabel: string;
    detailsLabel: string;
  };
  footer: {
    summary: string;
    legal: string;
    backToTop: string;
  };
  palette: {
    background: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accentContrast: string;
    secondary: string;
    line: string;
  };
  fontPair: {
    display: string;
    body: string;
    stylesheetUrl: string;
  };
}
