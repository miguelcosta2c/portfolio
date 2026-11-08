import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "../data/siteData";
import SmartLink from "./SmartLink";
import HeroVisual from "./HeroVisual";

const EASE = [0.22, 1, 0.36, 1];

// Posições (apenas visuais) das etiquetas flutuantes; os textos vêm de hero.floatingTags.
const TAG_POSITIONS = [
  "left-[4%] top-[14%]",
  "right-[2%] top-[30%]",
  "left-[8%] bottom-[22%]",
  "right-[10%] bottom-[10%]",
];

function AnimatedTitle({ text, highlight = [], reduce }) {
  const clean = (w) => w.toLowerCase().replace(/[.,!?;:]/g, "");
  return (
    <h1 className="font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-[5.5rem]">
      {text.split(" ").map((word, i) => {
        const hl = highlight.some((h) => clean(h) === clean(word));
        return (
          <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className={`inline-block ${hl ? "text-gradient" : ""}`}
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}

export default function Hero() {
  const { hero } = siteData;
  const reduce = useReducedMotion();
  const fade = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Fundo: grade + brilhos */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-violet/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-6 pb-16 pt-28 lg:grid-cols-12 lg:py-32">
        <div className="relative z-10 lg:col-span-7">
          <motion.div
            {...fade(0)}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-white/75 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.badge}
          </motion.div>

          <AnimatedTitle text={hero.title} highlight={hero.highlightWords} reduce={reduce} />

          <motion.p {...fade(0.7)} className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            {hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.85)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <SmartLink
              link={hero.primaryButton.link}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-base font-semibold text-black transition hover:shadow-[0_0_40px_-4px_rgba(214,255,77,0.6)] active:scale-95"
            >
              {hero.primaryButton.text}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </SmartLink>
            <SmartLink
              link={hero.secondaryButton.link}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              {hero.secondaryButton.text}
            </SmartLink>
          </motion.div>

          <motion.ul
            {...fade(1)}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-white/45"
          >
            {hero.meta.map((m) => (
              <li key={m} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                {m}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual 3D */}
        <div className="relative h-[360px] sm:h-[460px] lg:col-span-5 lg:h-[640px] lg:-mr-16 xl:-mr-28">
          <HeroVisual />
          {hero.floatingTags.slice(0, TAG_POSITIONS.length).map((tag, i) => (
            <span
              key={tag}
              aria-hidden="true"
              style={{ animation: `chip-float ${5 + i}s ease-in-out ${i * 0.6}s infinite` }}
              className={`pointer-events-none absolute rounded-full border border-white/10 bg-ink/60 px-3.5 py-1.5 font-mono text-[11px] text-white/80 backdrop-blur-md ${TAG_POSITIONS[i]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-6 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 lg:flex"
      >
        <span className="relative block h-10 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-0 bg-accent" style={{ animation: "scroll-line 2.4s ease-in-out infinite" }} />
        </span>
        {hero.scrollHint}
      </div>
    </section>
  );
}
