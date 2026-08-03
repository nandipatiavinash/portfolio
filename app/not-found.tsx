import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs tracking-widest text-blueprint">ERROR 404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
        This page isn&rsquo;t part of the build.
      </h1>
      <p className="mt-4 max-w-md text-lg text-graphite">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
      </p>
      <Link href="/" className="underline-hover mt-8 text-base font-medium">
        Back to home →
      </Link>
    </section>
  );
}
