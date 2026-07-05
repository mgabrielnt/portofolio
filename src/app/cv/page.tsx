import Link from "next/link";

export const metadata = { title: "CV" };

export default function CvPage() {
  return (
    <main className="min-h-screen bg-ink px-6 py-10 text-paper">
      <section className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">
              CV
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.06em]">
              Mangelek Gabriel Nicholas Tambun
            </h1>
          </div>

          <Link
            href="/"
            className="border border-line px-5 py-3 text-xs font-black"
          >
            BACK HOME
          </Link>
        </div>

        <div className="mb-5 flex gap-3">
          <a
            href="/cv/mangelek-gabriel-cv.pdf"
            target="_blank"
            className="border border-line px-5 py-3 text-xs font-black"
          >
            OPEN CV
          </a>

          <a
            href="/cv/mangelek-gabriel-cv.pdf"
            download
            className="border border-line px-5 py-3 text-xs font-black"
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <iframe
            src="/cv/mangelek-gabriel-cv.pdf"
            className="h-[85vh] w-full"
            title="Mangelek Gabriel CV"
          />
        </div>
      </section>
    </main>
  );
}