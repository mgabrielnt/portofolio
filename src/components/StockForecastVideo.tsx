const steps = ["Market Data", "LLM Sentiment", "Model Score", "Forecast"];
const bars = [42, 68, 50, 84, 58, 72, 46, 92, 64, 78];
const cards = [
  ["Dataset", "8.599 rows"],
  ["News", "44.335 rows"],
  ["DirAcc", "58.27%"],
];

export function StockForecastVideo() {
  return (
    <div className="sf-video relative size-full overflow-hidden bg-[#060a16] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(91,198,255,.28),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(255,122,45,.22),transparent_34%),linear-gradient(135deg,#07101f,#14172a_52%,#241923)]" />
      <div className="absolute inset-0 opacity-[.16] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-4 top-4 h-1 w-[calc(100%-2rem)] overflow-hidden rounded-full bg-white/15 md:left-8 md:top-8 md:w-[calc(100%-4rem)]">
        <div className="sf-progress h-full rounded-full bg-gradient-to-r from-sky-300 via-indigo-400 to-orange-400" />
      </div>

      <aside className="absolute bottom-5 left-5 top-10 hidden w-48 rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur md:block">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid size-8 place-items-center rounded-md bg-white text-sky-400">↗</div>
          <b>StockForecast Pro</b>
        </div>
        <p className="mb-5 text-[11px] font-black uppercase tracking-[.2em] text-white/45">Navigation</p>
        {steps.map((step, index) => <div key={step} className="mb-4 flex items-center gap-3 text-xs font-bold"><span className={`sf-dot sf-dot-${index} size-3 rounded-full bg-white/20`} />{step}</div>)}
      </aside>

      <main className="absolute inset-4 pt-8 md:left-64 md:inset-y-8 md:right-8 md:pt-0">
        <header className="rounded-3xl border border-white/10 bg-white/[.05] p-5 shadow-2xl backdrop-blur md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[.35em] text-sky-300">StockForecast Pro</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-.05em] md:text-5xl">LLM-TFT Forecasting Dashboard</h2>
          <p className="mt-2 text-sm font-bold text-white/55 md:text-base">Technical indicators · LLM news sentiment · multi-horizon prediction</p>
        </header>

        <section className="sf-scene sf-intro grid place-items-center">
          <div className="grid w-full gap-4 md:grid-cols-3">{cards.map(([a, b]) => <div key={a} className="rounded-2xl border border-white/10 bg-[#151d2d]/90 p-5"><p className="text-sm text-sky-100/70">{a}</p><b className="text-3xl">{b}</b></div>)}</div>
        </section>

        <section className="sf-scene sf-market rounded-3xl border border-white/10 bg-[#0d1425]/90 p-5">
          <b>Market Data Lab</b><p className="text-sm text-white/50">Price action becomes technical features.</p>
          <svg className="mt-7 h-44 w-full" viewBox="0 0 820 210"><path className="sf-line-white" d="M10 160 L80 138 L145 152 L210 110 L280 96 L350 72 L420 85 L500 42 L575 68 L650 36 L740 58"/><path className="sf-line-blue" d="M10 160 L80 138 L145 152 L210 110 L280 96 L350 72 L420 85 L500 42 L575 68 L650 36 L740 58"/></svg>
        </section>

        <section className="sf-scene sf-sentiment rounded-3xl border border-white/10 bg-[#0d1425]/90 p-5">
          <b>Sentiment Intelligence</b><p className="text-sm text-white/50">RSS news → clean text → GPT label → daily sentiment.</p>
          <div className="mt-8 flex h-40 items-end gap-3">{bars.map((bar, i) => <span key={i} style={{ height: `${bar}%` }} className="sf-bar w-full rounded-t-lg bg-sky-300" />)}</div>
        </section>

        <section className="sf-scene sf-score rounded-3xl border border-white/10 bg-[#0d1425]/90 p-5">
          <b>Model Performance</b><p className="text-sm text-white/50">LLM-TFT lowers error and improves direction.</p>
          <div className="mt-8 grid grid-cols-3 gap-5">{[["RMSE", "132.6", "125.3"], ["MAE", "96.2", "91.0"], ["MAPE", "2.26", "2.13"]].map(([m, a, b]) => <div key={m} className="rounded-2xl bg-white/5 p-4"><p className="text-xs text-white/50">{m}</p><div className="mt-4 flex h-32 items-end gap-4"><span className="w-10 rounded-t-md bg-sky-300" style={{ height: `${Number(a) > 10 ? 90 : 80}%` }} /><span className="w-10 rounded-t-md bg-orange-400" style={{ height: `${Number(b) > 10 ? 76 : 68}%` }} /></div></div>)}</div>
        </section>

        <section className="sf-scene sf-forecast rounded-3xl border border-white/10 bg-[#0d1425]/90 p-5">
          <b>Prediction Studio</b><p className="text-sm text-white/50">Encoder 15 hari menghasilkan H+1, H+2, H+3.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">{[["H+1", "Rp 7.139", "+0.19%"], ["H+2", "Rp 7.142", "+0.24%"], ["H+3", "Rp 7.122", "-0.04%"]].map(([h, v, p]) => <div key={h} className="sf-pop rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-sky-100/70">LLM-TFT {h}</p><b className="text-3xl">{v}</b><span className="ml-3 rounded-full bg-emerald-400/15 px-2 py-1 text-xs font-black text-emerald-300">{p}</span></div>)}</div>
        </section>
      </main>
      <style>{`.sf-progress{animation:progress 14s linear infinite}.sf-scene{position:absolute;left:0;right:0;top:190px;bottom:0;opacity:0;transform:translateY(22px) scale(.98);animation:scene 14s ease-in-out infinite}.sf-intro{animation-delay:0s}.sf-market{animation-delay:2.8s}.sf-sentiment{animation-delay:5.6s}.sf-score{animation-delay:8.4s}.sf-forecast{animation-delay:11.2s}.sf-line-white,.sf-line-blue{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:900;stroke-dashoffset:900;animation:draw 2.8s ease-in-out infinite}.sf-line-white{stroke:#eef2fb;stroke-width:10;opacity:.45}.sf-line-blue{stroke:#61c9ff;stroke-width:4}.sf-bar{animation:bar 2.8s ease-in-out infinite}.sf-dot{animation:dot 14s steps(1,end) infinite}.sf-dot-1{animation-delay:2.8s}.sf-dot-2{animation-delay:5.6s}.sf-dot-3{animation-delay:8.4s}.sf-pop{animation:pop 2.8s ease-in-out infinite}@keyframes progress{to{width:100%}}@keyframes scene{0%,17%{opacity:1;transform:none}22%,100%{opacity:0;transform:translateY(-18px) scale(.98)}}@keyframes draw{45%,100%{stroke-dashoffset:0}}@keyframes bar{0%{transform:scaleY(.1)}45%,100%{transform:scaleY(1)}}@keyframes dot{0%,20%{background:#ff5b55}21%,100%{background:rgba(255,255,255,.2)}}@keyframes pop{0%{transform:translateY(16px);opacity:.35}35%,100%{transform:none;opacity:1}}`}</style>
    </div>
  );
}
