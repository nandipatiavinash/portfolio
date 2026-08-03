import Link from "next/link";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function AboutTeaser() {
  return (
    <section className="border-t border-ink/10 bg-paper-dim">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
        <RevealOnScroll>
          <Eyebrow className="mx-auto w-fit">About</Eyebrow>
          <p className="mt-6 text-3xl leading-snug tracking-tight text-balance md:text-4xl">
            Most software fails quietly — a workaround here, a spreadsheet
            there — until the business has outgrown the tools running it.
            I build the version that doesn&rsquo;t.
          </p>
          <Link
            href="/about"
            className="underline-hover mt-8 inline-block text-sm font-medium text-ink"
          >
            Read the full story →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
