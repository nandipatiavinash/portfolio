import { services } from "@/data/services";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Services() {
  return (
    <section id="services" className="border-t border-ink/10 bg-paper-dim text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <RevealOnScroll>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 max-w-xl text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
            Six ways to make the operation run cleaner.
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealOnScroll key={service.index} className="h-full">
              <div className="group h-full bg-paper p-8 transition-colors duration-500 hover:bg-paper-dim md:p-10">
                <p className="font-mono text-xs tracking-widest text-blueprint">
                  {service.index}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-baseline gap-2 text-xs text-ink/60">
                      <span className="h-1 w-1 rounded-full bg-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
