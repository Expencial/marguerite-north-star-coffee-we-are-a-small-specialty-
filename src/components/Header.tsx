import type { SiteConfig, ThemeMode } from "../types";

type HeaderProps = Pick<
  SiteConfig,
  "businessName" | "tagline" | "navigation"
> & {
  theme: ThemeMode;
  themeToggleLabel: string;
  onToggleTheme: () => void;
};

export function Header({
  businessName,
  tagline,
  navigation,
  theme,
  themeToggleLabel,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className="site-header header-enter">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label={businessName}>
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-copy">
            <strong>{businessName}</strong>
            <small>{tagline}</small>
          </span>
        </a>

        <nav aria-label={navigation.ariaLabel}>
          <ul className="nav-list">
            {navigation.items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={themeToggleLabel}
            aria-pressed={theme === "dark"}
            title={themeToggleLabel}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" focusable="false">
                  <circle cx="12" cy="12" r="4.25" />
                  <path d="M12 2.75v1.8M12 19.45v1.8M4.55 12H2.75M21.25 12h-1.8M5.64 5.64l1.27 1.27M17.09 17.09l1.27 1.27M18.36 5.64l-1.27 1.27M6.91 17.09l-1.27 1.27" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M20.2 14.1A7.7 7.7 0 0 1 9.9 3.8 7.85 7.85 0 1 0 20.2 14.1Z" />
                </svg>
              )}
            </span>
          </button>

          <a className="button button--small header-cta" href="#contact">
            {navigation.contactLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
