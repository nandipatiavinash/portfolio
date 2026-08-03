import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description: `The engineering philosophy and background behind ${siteConfig.name}'s work.`,
};

const values = [
  {
    title: "Understand the operation before touching the code",
    body: "Every requirement traces back to a person doing a job. I sit with them before I open an editor.",
  },
  {
    title: "Ship in weeks the client can see, not months they can't",
    body: "Long, invisible build cycles hide problems until they're expensive to fix. Visible, weekly progress keeps both sides honest.",
  },
  {
    title: "Boring technology, used well",
    body: "The right tool is usually the well-understood one. Novelty is a cost the client pays for; I only spend it when it earns its place.",
  },
  {
    title: "Software is a relationship, not a delivery",
    body: "A system that's right on launch day and wrong a year later has failed. I stay involved after go-live because that's when the real requirements show up.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-32">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-soft">
              {/* Replace with your portrait at /public/images/about-portrait.jpg */}
              <Image
                src="/images/prfoile.png"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
                I build the software layer businesses grow into, not out of.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite">
                <p>
                  I&rsquo;m {siteConfig.name}, a {siteConfig.role.toLowerCase()}{" "}
                  based in {siteConfig.location}. I work with owners and
                  operators — construction firms, manufacturers, trading
                  companies, service businesses — whose growth has outpaced
                  the spreadsheets and paper processes that got them here.
                </p>
                <p>
                  My background is in building production software for
                  operational businesses, not consumer apps. That distinction
                  matters: operational software has to survive a busy Monday
                  morning, an untrained temp worker, and a spotty internet
                  connection on a construction site — it doesn&rsquo;t get to
                  fail gracefully in front of a paying customer, because the
                  business runs on it.
                </p>
                <p>
                  I take on a small number of engagements at a time, by
                  design. Every project on the work page is software I built,
                  shipped, and still support — not a portfolio of concepts.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-dim">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <RevealOnScroll>
            <Eyebrow>Engineering philosophy</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
              Four things I don&rsquo;t compromise on.
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
            {values.map((value, i) => (
              <RevealOnScroll key={value.title} delay={i * 80}>
                <div className="border-l-2 border-bronze/50 pl-6">
                  <h3 className="text-xl font-medium tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-graphite">
                    {value.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
