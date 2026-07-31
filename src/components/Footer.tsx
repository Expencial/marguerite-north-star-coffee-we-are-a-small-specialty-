import type { SiteConfig } from "../types";

type FooterProps = Pick<SiteConfig, "businessName" | "tagline" | "footer">;

export function Footer({ businessName, tagline, footer }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <a className="brand brand--footer" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-copy">
            <strong>{businessName}</strong>
            <small>{tagline}</small>
          </span>
        </a>
        <p>{footer.summary}</p>
        <a className="back-to-top" href="#top">
          {footer.backToTop}
          <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="shell footer-legal">
        <small>{footer.legal}</small>
      </div>
    </footer>
  );
}
