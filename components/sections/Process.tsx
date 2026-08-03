import { process } from "@/data/process";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <RevealOnScroll>
        <Eyebrow>Process</Eyebrow>
        <h2 className="mt-4 max-w-xl text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
          Five phases. Eleven weeks. No surprises.
        </h2>
      </RevealOnScroll>

      <div className="mt-16 divide-y divide-ink/10 border-t border-ink/10">
        {process.map((phase) => (
          <RevealOnScroll key={phase.index}>
            <div className="grid gap-4 py-10 md:grid-cols-[80px_180px_1fr] md:items-baseline md:gap-8">
              <span className="font-mono text-sm text-blueprint">{phase.index}</span>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{phase.phase}</h3>
                <p className="mt-1 font-mono text-xs tracking-wide text-graphite/70">
                  {phase.duration}
                </p>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-graphite">
                {phase.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
