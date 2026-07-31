import type { SiteConfig } from "../types";
import { SectionHeading } from "./SectionHeading";

type AboutProps = Pick<SiteConfig, "about">;

export function About({ about }: AboutProps) {
  return (
    <section className="about section shell" id="histoire" aria-labelledby="about-title">
      <div className="about-art" data-reveal="left">
        <span className="about-stamp">{about.imageLabel}</span>
        <img
          className="about-photo"
          src={about.image}
          alt={about.imageAlt}
          width={864}
          height={1152}
          loading="lazy"
          decoding="async"
        />
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
