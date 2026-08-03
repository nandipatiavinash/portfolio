import Link from "next/link";
import type { ProjectFrontmatter } from "@/lib/mdx";

export function NextProjectNav({ project }: { project: ProjectFrontmatter }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-t border-ink/10 bg-ink text-paper"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-16 md:px-10 md:py-20">
        <span className="section-index text-bone/70">Next project</span>
        <span className="flex items-center gap-4 text-3xl font-medium tracking-tight text-balance md:text-5xl">
          {project.title}
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </span>
        <span className="text-sm text-paper/60">{project.industry}</span>
      </div>
    </Link>
  );
}
