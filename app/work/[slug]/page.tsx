import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { NextProjectNav } from "@/components/work/NextProjectNav";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.summary,
      images: [project.frontmatter.coverImage],
    },
  };
}

const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mt-14 text-2xl font-medium tracking-tight md:text-3xl" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-5 text-base leading-relaxed text-graphite md:text-lg" {...props} />
  ),
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.frontmatter.slug === slug);
  const nextProject =
    allProjects[(currentIndex + 1) % allProjects.length]?.frontmatter;

  const { frontmatter, content } = project;

  // Custom container configuration per client slug to keep layout ratios uniform and premium
  let containerClass = "max-w-3xl aspect-[2/1]";
  let logoSizeClass = "max-w-[340px] max-h-[150px]";

  if (slug === "sree-vaaraahi-erp") {
    containerClass = "max-w-2xl aspect-[1.4/1]";
    logoSizeClass = "max-w-[420px] max-h-[300px]";
  } else if (slug === "essensuals-salon") {
    containerClass = "max-w-3xl aspect-[2.2/1]";
    logoSizeClass = "max-w-[450px] max-h-[180px]";
  } else if (slug === "rk-global-trade-dashboard") {
    containerClass = "max-w-2xl aspect-[1.6/1]";
    logoSizeClass = "max-w-[320px] max-h-[200px]";
  } else if (slug === "japali-kitchens-inventory") {
    containerClass = "max-w-3xl aspect-[2.1/1]";
    logoSizeClass = "max-w-[440px] max-h-[180px]";
  }

  return (
    <>
      <article className="pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <RevealOnScroll>
            <Link href="/work" className="underline-hover text-sm text-graphite">
              ← All work
            </Link>
            <p className="section-index mt-8">
              {frontmatter.client} — {frontmatter.industry}
            </p>
            <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-balance md:text-6xl">
              {frontmatter.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
              {frontmatter.summary}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <dl className="mt-12 grid grid-cols-1 gap-6 border-y border-ink/10 py-8 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[11px] tracking-wide text-blueprint">CLIENT</dt>
                <dd className="mt-1 text-sm">{frontmatter.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-wide text-blueprint">SERVICES</dt>
                <dd className="mt-1 text-sm">{frontmatter.services.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-wide text-blueprint">STACK</dt>
                <dd className="mt-1 text-sm">{frontmatter.stack.join(" · ")}</dd>
              </div>
            </dl>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={250}>
          <div className={cn("relative mx-auto mt-14 rounded-2xl bg-white border border-ink/8 flex items-center justify-center", containerClass)}>
            <div className={cn("relative w-full h-full", logoSizeClass)}>
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                fill
                sizes="(min-width: 768px) 450px, 90vw"
                className="object-contain"
              />
            </div>
          </div>
        </RevealOnScroll>

        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <RevealOnScroll delay={100}>
            <div className="mt-4">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-16 rounded-2xl border border-bronze/30 bg-paper-dim p-8 md:p-10">
              <p className="font-mono text-xs tracking-wide text-blueprint">RESULT</p>
              <p className="mt-3 text-xl leading-snug text-balance md:text-2xl">
                {frontmatter.outcome}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </article>

      {nextProject && <NextProjectNav project={nextProject} />}
    </>
  );
}
