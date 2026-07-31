import type { SiteConfig } from "../types";
import { SectionHeading } from "./SectionHeading";

type ContactProps = Pick<SiteConfig, "businessName" | "contact">;

export function Contact({ businessName, contact }: ContactProps) {
  return (
    <section className="contact section shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <div className="contact-copy" id="contact-title">
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />
          <p>{contact.intro}</p>
          <a
            className="button button--light"
            href={contact.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            {contact.whatsappLabel}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <address aria-label={contact.detailsLabel}>
          <div className="address-mark" aria-hidden="true">
            <span />
          </div>
          <strong>{businessName}</strong>
          <p>{contact.address}</p>
          <a href={contact.phoneLink}>{contact.phone}</a>
          <a href={contact.emailLink}>{contact.email}</a>
          <a
            className="map-link"
            href={contact.mapLink}
            target="_blank"
            rel="noreferrer"
          >
            {contact.mapLabel}
            <span aria-hidden="true">↗</span>
          </a>
        </address>
      </div>
    </section>
  );
}
