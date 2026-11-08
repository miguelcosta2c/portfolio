import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, id, align = "left" }) {
  return (
    <Reveal className={`mb-14 max-w-3xl md:mb-20 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-6 text-lg leading-relaxed text-white/60">{subtitle}</p>}
    </Reveal>
  );
}
