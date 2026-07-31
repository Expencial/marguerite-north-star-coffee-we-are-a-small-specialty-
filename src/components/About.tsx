import type { SiteConfig } from "../types";
import { SectionHeading } from "./SectionHeading";

type AboutProps = Pick<SiteConfig, "about">;

export function About({ about }: AboutProps) {
  return (
    <section className="about section shell" id="histoire" aria-labelledby="about-title">
      <div
        className="about-art"
        role="img"
        aria-label={about.imageAlt}
        data-reveal="left"
      >
        <span className="about-stamp">{about.imageLabel}</span>
        <div className="hands-scene" aria-hidden="true">
          <span className="bowl" />
          <span className="wheat wheat--one" />
          <span className="wheat wheat--two" />
          <span className="flour flour--one" />
          <span className="flour flour--two" />
          <span className="flour flour--three" />
        </div>
      </div>

      <div className="about-copy" data-reveal="right">
        <div id="about-title">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </div>
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote>{about.highlight}</blockquote>
      </div>
    </section>
  );
}
