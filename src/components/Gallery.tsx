import type { CSSProperties } from "react";
import type { SiteConfig } from "../types";
import { SectionHeading } from "./SectionHeading";

type GalleryProps = Pick<SiteConfig, "gallery">;

export function Gallery({ gallery }: GalleryProps) {
  return (
    <section className="gallery section shell" id="galerie" aria-labelledby="gallery-title">
      <div id="gallery-title" data-reveal>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          intro={gallery.intro}
        />
      </div>
      <div className="gallery-grid">
        {gallery.items.map((item, index) => {
          const style = {
            "--gallery-light": item.colors[0],
            "--gallery-dark": item.colors[1],
            "--reveal-delay": `${index * 80}ms`,
          } as CSSProperties;

          return (
            <figure
              className={`gallery-card gallery-card--${index + 1}`}
              key={item.label}
              data-reveal
              style={style}
            >
              <div
                className="gallery-placeholder"
                role="img"
                aria-label={item.alt}
              >
                <span className="gallery-shape gallery-shape--one" aria-hidden="true" />
                <span className="gallery-shape gallery-shape--two" aria-hidden="true" />
                <span className="gallery-grain" aria-hidden="true" />
              </div>
              <figcaption>
                <strong>{item.label}</strong>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
