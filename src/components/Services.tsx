import type { SiteConfig } from "../types";
import { SectionHeading } from "./SectionHeading";

type ServiceIconName = SiteConfig["services"]["items"][number]["icon"];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  if (name === "cup") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 16h20v14a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8V16Z" />
        <path d="M32 20h3a5 5 0 0 1 0 10h-3" />
        <path d="M10 40h24" />
        <path d="M18 8c0 2 1.5 3 1.5 5M24 7c0 2.5 1.5 3.5 1.5 6" />
      </svg>
    );
  }

  if (name === "laptop") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="10" y="12" width="28" height="18" rx="2" />
        <path d="M8 34h32l-2-4H10l-2 4Z" />
        <path d="M22 30h4" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 40s-12.5-7.8-16.5-15C5 20 6.5 14 12 12.5 16 11.4 19.5 13.5 24 18c4.5-4.5 8-6.6 12-5.5 5.5 1.5 7 7.5 4.5 12.5C36.5 32.2 24 40 24 40Z" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="8" />
        <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.6 10.6l4.3 4.3M33.1 33.1l4.3 4.3M37.4 10.6l-4.3 4.3M14.9 33.1l-4.3 4.3" />
      </svg>
    );
  }

  if (name === "cake") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 24h30v14H9zM13 18c3 0 3 3 6 3s3-3 6-3 3 3 6 3 3-3 4-3v6H13zM24 7v7" />
        <path d="M22 9c0-2 2-4 2-4s2 2 2 4a2 2 0 0 1-4 0Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 43V12M24 18c-7 0-10-4-10-8 7 0 10 4 10 8ZM24 26c7 0 10-4 10-8-7 0-10 4-10 8ZM24 34c-7 0-10-4-10-8 7 0 10 4 10 8ZM24 42c7 0 10-4 10-8-7 0-10 4-10 8Z" />
    </svg>
  );
}

type ServicesProps = Pick<SiteConfig, "services">;

export function Services({ services }: ServicesProps) {
  return (
    <section className="services section" id="savoir-faire" aria-labelledby="services-title">
      <div className="shell">
        <div id="services-title">
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            intro={services.intro}
            align="center"
          />
        </div>
        <div className="service-grid">
          {services.items.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-icon">
                <ServiceIcon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
