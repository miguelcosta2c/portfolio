import { siteData } from "../data/siteData";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Services() {
  const { services } = siteData;

  return (
    <section id="services" aria-labelledby="services-title" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          id="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        <ul className="grid gap-5 sm:grid-cols-2">
          {services.items.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-accent/40">
                    <Icon name={s.icon} size={26} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-xs text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-bold text-white md:text-3xl">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-white/60">{s.description}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
