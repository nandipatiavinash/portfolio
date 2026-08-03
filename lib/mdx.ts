import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "content/work");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  industry: string;
  client: string;
  summary: string;
  outcome: string;
  coverImage: string;
  year: string;
  services: string[];
  stack: string[];
  featured?: boolean;
  order?: number;
};

export type Project = {
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getAllProjects(): Project[] {
  if (!fs.existsSync(WORK_DIR)) return [];

  const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith(".mdx"));

  const projects = files.map((filename) => {
    const filePath = path.join(WORK_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return {
      frontmatter: { ...(data as ProjectFrontmatter), slug: data.slug ?? filename.replace(/\.mdx$/, "") },
      content,
    };
  });

  return projects.sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.frontmatter.slug === slug);
}
