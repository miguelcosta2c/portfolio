import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";
import { resolveLink } from "../lib/links";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SmartLink from "./SmartLink";

function ProjectCard({ project, index }) {
  const { ui, images } = siteData;
  const featured = Boolean(project.featured);
  const hasLink = Boolean(resolveLink(project.link));

  return (
    <Reveal
      as="li"
      delay={(index % 2) * 0.1}
      className={`${featured ? "lg:col-span-7" : "lg:col-span-5 lg:mt-16"} col-span-12`}
    >
      <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 transition-colors duration-500 hover:border-white/25">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${ui.coverAlt} ${project.title}`}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = images.placeholder;
            }}
            className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 ${
              featured ? "aspect-[4/3] lg:aspect-[16/12]" : "aspect-[4/3]"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {featured && (
              <span className="rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-medium text-black">
                {ui.featuredBadge}
              </span>
            )}
            {project.demo && (
              <span className="rounded-full border border-white/20 bg-ink/70 px-3 py-1 font-mono text-[11px] text-white/80 backdrop-blur">
                {ui.demoBadge}
              </span>
            )}
          </div>
        </div>

        <div className="p-7 md:p-9">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-white/60">{project.description}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                {t}
              </li>
            ))}
          </ul>

          {hasLink && (
            <SmartLink
              link={project.link}
              aria-label={`${ui.viewProject}: ${project.title}`}
              className="mt-8 inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-accent"
            >
              {ui.viewProject}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </SmartLink>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const { projects } = siteData;

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          id="projects-title"
          eyebrow={projects.eyebrow}
          title={projects.title}
          subtitle={projects.subtitle}
        />

        <ul className="grid grid-cols-12 gap-6 lg:items-start">
          {projects.items.map((p, i) => (
            <ProjectCard key={p.id ?? p.title} project={p} index={i} />
          ))}
        </ul>

        {projects.note && (
          <p className="mt-12 text-center font-mono text-xs text-white/40">{projects.note}</p>
        )}
      </div>
    </section>
  );
}
