import { profile } from "@/data/profile";

export function HeroStatement() {
  return (
    <section className="relative mx-auto mt-16 w-full max-w-[760px] flex-1 md:mt-24">
      <span className="absolute -left-16 top-24 hidden size-2 rounded-full bg-accent md:block" />
      <h1 className="text-[42px] font-bold leading-[0.98] tracking-[-0.065em] md:text-[72px] xl:text-[96px]">
        {profile.headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p className="mt-5 max-w-xl text-sm leading-tight text-muted md:text-base">
        Data Science / AI Engineer and Full Stack Developer focused on
        forecasting, automation, dashboard systems, and deploy-ready web products.
      </p>
    </section>
  );
}
