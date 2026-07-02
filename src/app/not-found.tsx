import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-paper">
      <section className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-muted">404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-[-0.06em]">
          Page not found.
        </h1>
        <p className="mt-4 text-sm text-muted">
          The page is missing, moved, or not yet published.
        </p>
        <Link className="mt-8 inline-block border border-line px-5 py-3 text-xs" href="/">
          BACK HOME
        </Link>
      </section>
    </main>
  );
}
