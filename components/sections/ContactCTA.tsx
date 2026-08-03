import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-paper-dim text-ink border-t border-ink/10">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
        <RevealOnScroll>
          <p className="section-index mx-auto w-fit text-ink/50">Ready to build?</p>
          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-balance md:text-6xl text-ink">
            Let&rsquo;s make your next project the best one yet.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-graphite md:text-lg">
            Reach out directly — a short conversation is usually enough to
            know whether we&rsquo;re the right fit.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.bookCallWhatsapp}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "lg",
                variant: "primary",
              })}
            >
              Book a Call
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "lg",
                variant: "secondary",
              })}
            >
              WhatsApp Chat
            </a>
            <a
              href={siteConfig.tel}
              className={buttonVariants({
                size: "lg",
                variant: "secondary",
              })}
            >
              Call — {siteConfig.phone}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
