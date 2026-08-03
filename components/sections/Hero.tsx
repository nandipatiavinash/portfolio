import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SplitHeadline } from "@/components/animations/SplitHeadline";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { buttonVariants } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:px-10">
        <div>
          <p className="section-index">
            {siteConfig.role} — {siteConfig.location}
          </p>

          <SplitHeadline
            as="h1"
            text={siteConfig.tagline}
            className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight text-balance md:text-7xl"
          />

          <RevealOnScroll delay={500}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite md:text-xl">
              {siteConfig.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={700}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.bookCallWhatsapp}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Book a Call
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "lg", variant: "secondary" })}
              >
                WhatsApp Chat
              </a>
              <Link href="/work" className={buttonVariants({ size: "lg", variant: "ghost" })}>
                View Work →
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={900}>
            <p className="mt-6 font-mono text-xs tracking-wide text-blueprint">
              {siteConfig.availability}
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={300} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-soft">
            <Image
              src="/images/prfoile.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </RevealOnScroll>
      </div>

      <div className="mt-20 flex justify-center md:mt-28">
        <div className="flex flex-col items-center gap-3 text-graphite/60">
          <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
          <span className="relative block h-14 w-px overflow-hidden bg-ink/10">
            <span className="absolute inset-x-0 top-0 h-1/2 w-px bg-bronze animate-[scrollLine_1.8s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
