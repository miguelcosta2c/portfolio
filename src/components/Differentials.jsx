import { siteData } from "../data/siteData";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Differentials() {
  const { differentials } = siteData;

  return (
    <section id="differentials" aria-labelledby="differentials-title" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          id="differentials-title"
          eyebrow={differentials.eyebrow}
          title={differentials.title}
          subtitle={differentials.subtitle}
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.items.map((d, i) => (
            <Reveal as="li" key={d.title} delay={(i % 3) * 0.08}>
              <SpotlightCard className="h-full p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={d.icon} size={22} strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{d.description}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
