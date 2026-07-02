import Link from "next/link";

export const metadata = { title: "CV" };

export default function CvPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-paper">
      <section className="max-w-xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">CV</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.08em]">CV placeholder.</h1>
        <p className="mt-5 text-sm font-bold leading-tight text-muted">
          Add your final PDF to public/cv/mangelek-gabriel-cv.pdf later.
        </p>
        <Link href="/" className="mt-8 inline-block border border-line px-5 py-3 text-xs font-black">
          BACK HOME
        </Link>
      </section>
    </main>
  );
}
