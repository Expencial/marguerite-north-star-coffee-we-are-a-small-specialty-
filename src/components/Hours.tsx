import type { SiteConfig } from "../types";
import { SectionHeading } from "./SectionHeading";

type HoursProps = Pick<SiteConfig, "hours">;

export function Hours({ hours }: HoursProps) {
  return (
    <section className="hours section" id="horaires" aria-labelledby="hours-title">
      <div className="shell hours-inner">
        <div id="hours-title" className="hours-copy">
          <SectionHeading eyebrow={hours.eyebrow} title={hours.title} />
          <p className="hours-note">{hours.note}</p>
        </div>
        <dl className="hours-list">
          {hours.days.map((day) => (
            <div key={day.label}>
              <dt>{day.label}</dt>
              <dd>{day.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
