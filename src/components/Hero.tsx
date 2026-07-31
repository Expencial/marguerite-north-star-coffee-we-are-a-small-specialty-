import type { CSSProperties } from "react";
import type { SiteConfig } from "../types";

type HeroProps = Pick<SiteConfig, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p
          className="eyebrow hero-enter"
          style={{ "--enter-delay": "40ms" } as CSSProperties}
        >
          {hero.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="hero-enter"
          style={{ "--enter-delay": "110ms" } as CSSProperties}
        >
          {hero.title}
        </h1>
        <p
          className="hero-description hero-enter"
          style={{ "--enter-delay": "180ms" } as CSSProperties}
        >
          {hero.description}
        </p>
        <div
          className="hero-actions hero-enter"
          style={{ "--enter-delay": "250ms" } as CSSProperties}
        >
          <a className="button" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <p
          className="availability hero-enter"
          style={{ "--enter-delay": "320ms" } as CSSProperties}
        >
          <span aria-hidden="true" />
          {hero.note}
        </p>
      </div>

      <figure
        className="hero-visual hero-enter"
        style={{ "--enter-delay": "160ms" } as CSSProperties}
      >
        <span className="hero-visual-label">{hero.visualLabel}</span>
        <div className="window-scene">
          <img
            className="hero-photo"
            src={hero.visualImage}
            alt={hero.visualAlt}
            width={900}
            height={1200}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <figcaption>{hero.visualCaption}</figcaption>
      </figure>
    </section>
  );
}
