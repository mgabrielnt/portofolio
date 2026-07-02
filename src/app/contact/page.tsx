import Link from "next/link";
import { links, profile } from "@/data/profile";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink px-5 py-5 text-paper md:px-8">
      <Link href="/" className="text-xs font-black uppercase text-muted">Back</Link>
      <section className="mt-20 max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">Contact</p>
        <h1 className="mt-4 text-[52px] font-black leading-[0.92] tracking-[-0.08em] md:text-[90px]">
          Build intelligent systems together.
        </h1>
        <p className="mt-6 max-w-xl text-lg font-bold leading-tight text-muted">
          {profile.status}. Replace placeholder email and WhatsApp in src/data/profile.ts.
        </p>
      </section>
      <section className="mt-12 grid gap-3 md:grid-cols-4">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="border border-line p-5 text-xl font-black hover:bg-white/10">
            {link.label}
          </Link>
        ))}
      </section>
    </main>
  );
}
