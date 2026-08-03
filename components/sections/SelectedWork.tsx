import Link from "next/link";
import { getAllProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Eyebrow } from "@/components/ui/primitives";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function SelectedWork() {
  const projects = getAllProjects().filter((p) => p.frontmatter.featured);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <RevealOnScroll>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 max-w-xl text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              Software built for how the business actually runs.
            </h2>
          </div>
          <Link href="/work" className="underline-hover text-sm font-medium text-ink">
            View all projects →
          </Link>
        </div>
      </RevealOnScroll>

      <div className="mt-4 divide-y divide-ink/10">
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
