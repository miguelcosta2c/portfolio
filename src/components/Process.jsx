import { siteData } from "../data/siteData";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { process } = siteData;

  return (
    <section id="process" aria-labelledby="process-title" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          id="process-title"
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />

        <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* linha conectora (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />
          {/* linha vertical (mobile) */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-7 top-4 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent lg:hidden"
          />

          {process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="relative flex gap-6 lg:block">
              <span className="relative z-10 grid h-14 w-14 flex-none place-items-center rounded-full border border-white/15 bg-ink text-accent">
                <Icon name={s.icon} size={22} strokeWidth={1.6} />
              </span>
              <div className="lg:mt-8">
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
