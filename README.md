# Studio — personal brand website

A premium, editorial-minimal personal brand site built with Next.js 16,
React 19, TypeScript, and Tailwind CSS v4. Built to read like the digital
identity of an engineering studio, not a generic developer portfolio.

## Design direction

- **Palette** — warm paper (`#faf9f6`) and near-black ink (`#121310`), with
  a single restrained bronze accent (`#8a6a3d`) and a desaturated
  "blueprint blue" (`#3c5578`) used only for small technical annotations
  (section labels, spec numbers, revision marks in the footer).
- **Type** — Geist for display and body, JetBrains Mono for every
  technical annotation. The mono face is the signature: it ties the whole
  site back to the idea of a spec sheet or engineering drawing.
- **Motion** — word-reveal headlines (GSAP + SplitType), scroll-triggered
  fade/blur reveals (IntersectionObserver, no library needed), and a
  Lenis-powered smooth scroll. Everything respects
  `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What to edit first

Everything editable lives in three places — you should not need to touch
component code for routine updates.

| What | Where |
|---|---|
| Your name, tagline, bio, email, socials | `config/site.ts` |
| Navigation links | `data/nav.ts` |
| Services offered | `data/services.ts` |
| Process / timeline steps | `data/process.ts` |
| Client logos in the "Trusted By" strip | `data/trusted-by.ts` + `/public/logos` |
| Case studies | `content/work/*.mdx` |

### Adding a new case study

1. Create a new file in `content/work/your-project-slug.mdx`.
2. Copy the frontmatter shape from an existing file (title, slug, industry,
   client, summary, outcome, coverImage, year, services, stack, featured,
   order).
3. Write the body in Markdown — it's rendered automatically with the
   headings, problem/solution/architecture structure already styled.
4. The project appears on `/work` automatically, and on the homepage if
   `featured: true`.

### Photos

Two portrait placeholders are already in `/public/images` so the site
builds cleanly out of the box:

- `public/images/portrait.jpg` — hero section
- `public/images/about-portrait.jpg` — about page

Replace both with real photos (same aspect ratio, roughly 4:5) whenever
you're ready — no code changes needed.

### The four client logos

`sree-vaaraahi.png`, `rk-global.png`, `essensuals.jpeg`, and
`japali-kitchens.png` are already wired into `data/trusted-by.ts` and used
as case-study cover images in `content/work`. Swap the case-study narrative
copy for the real project details before publishing — the current text is
a realistic placeholder grounded in each client's industry, not verified
fact.

### Contact form

`app/contact/actions.ts` is a server action stub. It validates input and
returns a success state, but does not send an email yet — wire it to
Resend, Postmark, a webhook, or your provider of choice, and add whatever
API key it needs to `.env.local`.

## Tech stack

- Next.js 16 (App Router, Server Components by default)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first `@theme` config in `app/globals.css`)
- Framer Motion (available for further micro-interactions)
- GSAP + SplitType (headline reveal)
- Lenis (smooth scroll)
- next-mdx-remote + gray-matter (case study content)

## Performance & SEO

- Server Components everywhere except the small interactive islands
  (`Navbar`, `SplitHeadline`, `RevealOnScroll`, `ContactForm`,
  `SmoothScrollProvider`).
- `next/image` throughout with explicit `sizes`.
- `next/font` with `display: swap`, no layout-shifting font loads.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically, including every case study.
- Metadata (title templates, Open Graph, Twitter cards) centralized in
  `app/layout.tsx` and per-page `generateMetadata`.

## Deploying

This is a standard Next.js app — push to a Git repo and import it on
[Vercel](https://vercel.com/new), or run `npm run build && npm start`
anywhere that supports Node.js.

## Extending

- **shadcn/ui**: `components/ui/primitives.tsx` currently has hand-rolled
  Button/Input/Textarea. Run `npx shadcn@latest init` and
  `npx shadcn@latest add <component>` to pull in more components in the
  same style.
- **Case study galleries**: add an `images: string[]` field to a project's
  frontmatter and map over it in `app/work/[slug]/page.tsx` for a full
  image gallery — left out by default since no real project photos were
  provided yet.
