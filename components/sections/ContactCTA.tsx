import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#121310] text-[#faf9f6] dark:bg-[#161615] border-t border-white/5">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
        <RevealOnScroll>
          <p className="section-index mx-auto w-fit text-[#faf9f6]/50">Ready to build?</p>
          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-balance md:text-6xl text-[#faf9f6]">
            Let&rsquo;s make your next project the best one yet.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-[#faf9f6]/70 md:text-lg">
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
                className: "bg-[#faf9f6] text-[#121310] hover:bg-white font-medium border-none",
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
                className: "border-white/20 text-[#faf9f6] hover:border-white/50",
              })}
            >
              WhatsApp Chat
            </a>
            <a
              href={siteConfig.tel}
              className={buttonVariants({
                size: "lg",
                variant: "secondary",
                className: "border-white/20 text-[#faf9f6] hover:border-white/50",
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
