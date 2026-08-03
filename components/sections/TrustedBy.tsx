import Image from "next/image";
import { trustedBy } from "@/data/trusted-by";
import { Marquee } from "@/components/animations/Marquee";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Eyebrow } from "@/components/ui/primitives";

export function TrustedBy() {
  return (
    <section className="border-y border-ink/10 bg-paper-dim py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <RevealOnScroll>
          <Eyebrow>Trusted by</Eyebrow>
          <p className="mt-4 max-w-2xl text-xl leading-snug text-ink/80 text-balance md:text-2xl">
            Construction firms, salon chains, global trading companies, and kitchen
            manufacturers — all running on software built by Avinash Nandipati.
          </p>
        </RevealOnScroll>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper-dim to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper-dim to-transparent" />

        <Marquee>
          {trustedBy.map((company) => (
            <div
              key={company.name}
              className="mx-10 flex h-16 w-44 flex-shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:mx-14 md:w-52"
              title={`${company.name} — ${company.industry}`}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={200}
                height={64}
                className="max-h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/90 dark:p-1.5 dark:rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
