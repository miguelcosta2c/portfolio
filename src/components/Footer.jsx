import { ArrowUp } from "lucide-react";
import { siteData } from "../data/siteData";
import SmartLink from "./SmartLink";

export default function Footer() {
  const { personal, navbar, social, footer, ui } = siteData;
  const socials = Object.entries(social).filter(([, url]) => Boolean(url));

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-bold text-white">{personal.name}</p>
          <p className="mt-3 max-w-xs text-white/55">{footer.tagline}</p>
        </div>

        <nav aria-label={ui.footerNav} className="md:col-span-4">
          <ul className="grid grid-cols-2 gap-3">
            {navbar.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/60 transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-3 md:col-span-3">
          {socials.map(([key, url]) => (
            <li key={key}>
              <SmartLink link={url} className="text-white/60 transition-colors hover:text-accent">
                {ui.socialLabels[key] ?? key}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 text-sm text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {personal.name}. {footer.rights}
          </p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            {footer.backToTop}
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
