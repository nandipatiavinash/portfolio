import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} to discuss a custom software, ERP, or automation project.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-10 md:pt-32">
      <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24">
        <div>
          <RevealOnScroll>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              Tell me what&rsquo;s slowing your business down.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
              {siteConfig.availability}. A short call is usually enough to
              tell whether custom software is the right answer.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <dl className="mt-12 space-y-6 border-t border-ink/10 pt-8">
              <div className="flex items-center justify-between">
                <dt className="font-mono text-xs tracking-wide text-blueprint">PHONE</dt>
                <dd>
                  <a href={siteConfig.tel} className="underline-hover text-base font-medium">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-mono text-xs tracking-wide text-blueprint">WHATSAPP</dt>
                <dd>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-hover text-base"
                  >
                    Message on WhatsApp →
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-mono text-xs tracking-wide text-blueprint">EMAIL</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="underline-hover text-base">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-mono text-xs tracking-wide text-blueprint">LOCATION</dt>
                <dd className="text-sm text-graphite">
                  Hyderabad, Telangana, India
                </dd>
              </div>
            </dl>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={100}>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
