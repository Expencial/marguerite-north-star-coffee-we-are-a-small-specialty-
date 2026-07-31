import type { CSSProperties } from "react";
import type { SiteConfig } from "../types";
import { SectionHeading } from "./SectionHeading";

type HoursProps = Pick<SiteConfig, "hours">;

export function Hours({ hours }: HoursProps) {
  return (
    <section className="hours section" id="horaires" aria-labelledby="hours-title">
      <div className="shell hours-inner">
        <div id="hours-title" className="hours-copy" data-reveal="left">
          <SectionHeading eyebrow={hours.eyebrow} title={hours.title} />
          <p className="hours-note">{hours.note}</p>
        </div>
        <dl className="hours-list">
          {hours.days.map((day, index) => (
            <div
              key={day.label}
              data-reveal="right"
              style={{ "--reveal-delay": `${index * 50}ms` } as CSSProperties}
            >
              <dt>{day.label}</dt>
              <dd>{day.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
