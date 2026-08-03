import type { Metadata } from "next";
import { getAllProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies in custom software, ERP systems, and internal tools built for real operating businesses.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:px-10 md:pt-32">
      <RevealOnScroll>
        <Eyebrow>Selected work</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-5xl font-medium leading-tight tracking-tight text-balance md:text-6xl">
          Every project here replaced something that was already limping along.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
          No demo projects, no templates. Each case study below is a system
          currently running inside a real business.
        </p>
      </RevealOnScroll>

      <div className="mt-8 divide-y divide-ink/10">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.frontmatter.slug}
            project={project.frontmatter}
            index={i}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
