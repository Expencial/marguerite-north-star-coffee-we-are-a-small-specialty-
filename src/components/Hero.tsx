import type { SiteConfig } from "../types";

type HeroProps = Pick<SiteConfig, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-actions">
          <a className="button" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="availability">
          <span aria-hidden="true" />
          {hero.note}
        </p>
      </div>

      <figure
        className="hero-visual"
        role="img"
        aria-label={hero.visualAlt}
      >
        <span className="hero-visual-label">{hero.visualLabel}</span>
        <div className="window-scene" aria-hidden="true">
          <span className="sun-disc" />
          <span className="leaf leaf--one" />
          <span className="leaf leaf--two" />
          <span className="loaf loaf--large">
            <i />
            <i />
            <i />
          </span>
          <span className="loaf loaf--small">
            <i />
            <i />
          </span>
        </div>
        <figcaption>{hero.visualCaption}</figcaption>
      </figure>
    </section>
  );
}
