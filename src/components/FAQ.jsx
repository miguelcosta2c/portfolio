import { Plus } from "lucide-react";
import { siteData } from "../data/siteData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const { faq } = siteData;
  if (!faq.items?.length) return null;

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />
        </div>

        <div className="lg:col-span-8">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.06}>
              <details className="group border-b border-white/10 py-1 first:border-t">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left font-display text-xl font-bold text-white transition-colors hover:text-accent">
                  {item.question}
                  <Plus
                    aria-hidden="true"
                    size={22}
                    className="flex-none text-accent transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-white/60">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
