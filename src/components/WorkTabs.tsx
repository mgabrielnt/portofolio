export function WorkTabs() {
  return (
    <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-line p-1 text-[11px] font-bold md:flex">
      <a href="#projects" className="rounded-full bg-white/15 px-5 py-3">
        Projects <sup>5</sup>
      </a>
      <a href="#recognition" className="rounded-full px-5 py-3 text-muted">
        Awards <sup>4</sup>
      </a>
    </div>
  );
}
