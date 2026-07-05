import Link from "next/link";

export const metadata = { title: "CV | Mangelek Gabriel" };

const cvPath = "/cv/mangelek-gabriel-cv.pdf";
const stats = ["AI / Data / Web", "Forecasting", "Dashboard", "Portfolio"];

export default function CvPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink px-3 py-3 text-paper md:px-4">
      <section className="relative min-h-[calc(100vh-24px)] overflow-hidden border border-line bg-card/70">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-10 size-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 p-4 md:p-8">
          <header className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">Curriculum Vitae</p>
              <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[.86] tracking-[-0.08em] md:text-7xl">
                Mangelek Gabriel<br />Nicholas Tambun
              </h1>
              <p className="mt-4 max-w-xl text-sm font-bold leading-tight text-muted md:text-base">
                AI, data, and web portfolio profile with project proof, technical skills, and professional credentials.
              </p>
            </div>

            <Link
              href="/"
              className="w-fit border border-line px-5 py-3 text-xs font-black uppercase transition hover:border-accent hover:text-accent"
            >
              Back Home
            </Link>
          </header>

          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <aside className="space-y-4">
              <div className="border border-line bg-ink/70 p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-muted">CV Actions</p>
                <div className="mt-5 grid gap-3">
                  <a href={cvPath} target="_blank" rel="noreferrer" className="bg-paper px-5 py-4 text-center text-xs font-black uppercase text-ink transition hover:bg-accent hover:text-white">
                    Open CV
                  </a>
                  <a href={cvPath} download className="border border-line px-5 py-4 text-center text-xs font-black uppercase transition hover:border-accent hover:text-accent">
                    Download PDF
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((item) => (
                  <div key={item} className="min-h-24 border border-line bg-white/[0.03] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent">Focus</p>
                    <p className="mt-3 text-lg font-black leading-none tracking-[-0.04em]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="border border-dashed border-line p-5 text-sm font-bold leading-tight text-muted">
                <span className="text-accent">●</span> Best viewed on desktop. Use Open CV if the browser blocks embedded PDF preview.
              </div>
            </aside>

            <section className="overflow-hidden border border-line bg-paper p-2 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between bg-ink px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-muted">
                <span>Live PDF Preview</span>
                <span className="text-accent">/cv</span>
              </div>
              <iframe src={cvPath} className="h-[78vh] w-full bg-white" title="Mangelek Gabriel CV" />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
