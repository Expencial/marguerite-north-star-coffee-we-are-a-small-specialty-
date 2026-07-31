import type { SiteConfig } from "../types";

type HeaderProps = Pick<
  SiteConfig,
  "businessName" | "tagline" | "navigation"
>;

export function Header({
  businessName,
  tagline,
  navigation,
}: HeaderProps) {
  return (
    <header className="site-header">
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

        <a className="button button--small header-cta" href="#contact">
          {navigation.contactLabel}
        </a>
      </div>
    </header>
  );
}
