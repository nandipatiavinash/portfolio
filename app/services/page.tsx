import type { Metadata } from "next";
import { services } from "@/data/services";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, ERP systems, AI automation, internal tools, dashboards, and modern websites for operating businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-10 md:pt-32">
        <RevealOnScroll>
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 max-w-2xl text-5xl font-medium leading-tight tracking-tight text-balance md:text-6xl">
            Software scoped to the problem, not the other way around.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
            Every engagement starts as a conversation about the operational
            problem, not a menu of technologies. What follows below is a
            guide to the shapes that conversation most often takes.
          </p>
        </RevealOnScroll>

        <div className="mt-16 divide-y divide-ink/10 border-t border-ink/10">
          {services.map((service) => (
            <RevealOnScroll key={service.index}>
              <div className="grid gap-4 py-10 md:grid-cols-[80px_1fr_1fr] md:gap-8">
                <span className="font-mono text-sm text-blueprint">
                  {service.index}
                </span>
                <div>
                  <h2 className="text-2xl font-medium tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-graphite">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2 self-start">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2 text-sm text-graphite"
                    >
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Process />
      <ContactCTA />
    </>
  );
}
