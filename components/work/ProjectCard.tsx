import Image from "next/image";
import Link from "next/link";
import type { ProjectFrontmatter } from "@/lib/mdx";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  reverse,
}: {
  project: ProjectFrontmatter;
  index: number;
  reverse?: boolean;
}) {
  // Custom sizing per logo to keep them looking uniform and premium on the card grid
  let maxLogoClass = "max-w-[200px] max-h-[95px]";
  if (project.slug === "sree-vaaraahi-erp") {
    maxLogoClass = "max-w-[260px] max-h-[190px]";
  } else if (project.slug === "essensuals-salon") {
    maxLogoClass = "max-w-[270px] max-h-[120px]";
  } else if (project.slug === "rk-global-trade-dashboard") {
    maxLogoClass = "max-w-[220px] max-h-[135px]";
  } else if (project.slug === "japali-kitchens-inventory") {
    maxLogoClass = "max-w-[260px] max-h-[135px]";
  }

  return (
    <RevealOnScroll>
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-8 py-16 md:grid-cols-2 md:gap-16 md:py-24"
      >
        {/*
          Cover image panel.
          - bg-white (in both light & dark mode) blends white-backed logos perfectly.
        */}
        <div
          className={cn(
            "relative rounded-2xl bg-white border border-ink/8 flex items-center justify-center aspect-[4/3]",
            reverse ? "md:order-2" : "md:order-1"
          )}
        >
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 rounded-2xl transition-shadow duration-500 group-hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />

          {/* Logo / cover image — centered, padded, and custom-scaled per client logo dimensions */}
          <div className={cn("relative w-full h-full", maxLogoClass)}>
            <Image
              src={project.coverImage}
              alt={project.client ?? project.title}
              fill
              sizes="(min-width: 768px) 280px, 90vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Text column */}
        <div className={cn("flex flex-col justify-center", reverse ? "md:order-1" : "md:order-2")}>
          <p className="section-index">{project.industry}</p>
          <h3 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-graphite">
            {project.summary}
          </p>

          <div className="mt-6 border-l-2 border-bronze/50 pl-4">
            <p className="font-mono text-xs tracking-wide text-blueprint">OUTCOME</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">{project.outcome}</p>
          </div>

          <span className="underline-hover mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink">
            View case study
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </RevealOnScroll>
  );
}
