import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SmartLink from "./SmartLink";

export default function Contact() {
  const { contact } = siteData;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative px-6 py-28 md:py-40">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-2 px-6 py-20 text-center md:px-16 md:py-28">
        {/* brilhos de fundo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0 opacity-70" />
          <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-violet/25 blur-[120px]" />
        </div>

        <div className="relative">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-accent">{contact.eyebrow}</p>
          <h2
            id="contact-title"
            className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            {contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{contact.subtitle}</p>

          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            {contact.channels.map((c) => (
              <SmartLink
                key={c.label}
                link={c.link}
                className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-semibold transition active:scale-95 ${
                  c.primary
                    ? "bg-accent text-black hover:shadow-[0_0_40px_-4px_rgba(214,255,77,0.6)]"
                    : "border border-white/15 text-white hover:border-white/40 hover:bg-white/5"
                }`}
              >
                <Icon name={c.icon} size={18} />
                {c.label}
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </SmartLink>
            ))}
          </div>

          {contact.email && (
            <p className="mt-10 font-mono text-sm text-white/50">{contact.email}</p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
