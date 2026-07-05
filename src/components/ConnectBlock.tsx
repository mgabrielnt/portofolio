import Link from "next/link";
import { links, profile } from "@/data/profile";
import { DotLabel } from "./DotLabel";

export function ConnectBlock() {
  return (
    <article>
      <DotLabel>Connect</DotLabel>
      <div className="text-sm font-black leading-tight">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="block hover:text-accent">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="mt-6 text-sm font-black leading-tight">
        <p>{profile.availability}</p>
        <p>{profile.status}</p>
      </div>
      <div className="mt-4 flex gap-3 text-[11px] font-black uppercase text-muted">
        <Link href="mailto:nicholas.tbn26@gmail.com" className="border border-line px-4 py-3">Contact</Link>
        <Link href="/cv" className="border border-line px-4 py-3">CV</Link>
      </div>
    </article>
  );
}
