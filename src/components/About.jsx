import { Check } from "lucide-react";
import { siteData } from "../data/siteData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { about, personal, images, ui } = siteData;

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-20">
        {/* Foto */}
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2rem] border border-accent/40"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2">
            <img
              src={personal.profileImage}
              alt={`${ui.photoAlt} ${personal.name}`}
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = images.placeholder;
              }}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-20">
              <p className="font-display text-xl font-bold text-white">{personal.name}</p>
              <p className="mt-1 font-mono text-xs text-white/60">{personal.role}</p>
            </div>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-white/40">
            {about.photoCaption}
          </p>
        </Reveal>

        {/* Texto */}
        <div className="lg:col-span-7">
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />

          <div className="space-y-5 text-lg leading-relaxed text-white/65">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="ul" className="mt-10 space-y-4">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-white/85">
                <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent/15 text-accent">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {h}
              </li>
            ))}
          </Reveal>

          <Reveal className="mt-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/40">
              {about.skillsTitle}
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {about.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition hover:border-accent/50 hover:text-white"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
