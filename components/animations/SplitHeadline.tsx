"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SplitHeadlineProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
};

/**
 * Cinematic word-by-word reveal for large editorial headlines.
 * Uses GSAP + SplitType, loaded client-side only. Falls back to a
 * plain fade if the visitor has reduced motion enabled.
 */
export function SplitHeadline({
  text,
  className,
  as = "h1",
  delay = 0,
}: SplitHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      node.style.opacity = "1";
      return;
    }

    let split: import("split-type").default | undefined;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [{ default: SplitType }, { gsap }] = await Promise.all([
        import("split-type"),
        import("gsap"),
      ]);

      split = new SplitType(node, { types: "words", wordClass: "word-reveal" });

      ctx = gsap.context(() => {
        gsap.set(split!.words, { yPercent: 110, opacity: 0 });
        gsap.to(split!.words, {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.045,
          delay: delay / 1000,
        });
      }, node);
    })();

    return () => {
      ctx?.revert();
      split?.revert();
    };
  }, [delay]);

  const Comp = as;

  return (
    <Comp
      ref={ref as never}
      className={cn("overflow-hidden [&_.word-reveal]:inline-block", className)}
    >
      {text}
    </Comp>
  );
}
