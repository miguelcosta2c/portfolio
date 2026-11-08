import { siteData } from "../data/siteData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

/** Só aparece quando siteData.testimonials.items tiver depoimentos reais. */
export default function Testimonials() {
  const { testimonials } = siteData;
  if (!testimonials.items?.length) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="testimonials-title" eyebrow={testimonials.eyebrow} title={testimonials.title} />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal as="li" key={`${t.author}-${i}`} delay={(i % 3) * 0.08}>
              <SpotlightCard className="h-full p-8">
                <blockquote className="text-lg leading-relaxed text-white/80">“{t.quote}”</blockquote>
                <figcaption className="mt-6">
                  <p className="font-display font-bold text-white">{t.author}</p>
                  {t.role && <p className="text-sm text-white/50">{t.role}</p>}
                </figcaption>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
