import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";
import SmartLink from "./SmartLink";

export default function Navbar() {
  const { personal, navbar, ui } = siteData;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? "border-b border-white/10 bg-ink-2"
          : scrolled
            ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={ui.mainNav}
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6"
      >
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="relative grid h-8 w-8 place-items-center rounded-full border border-white/15"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {personal.brand}
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navbar.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-white/65 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <SmartLink
            link={navbar.cta.link}
            className="hidden items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-accent hover:bg-accent hover:text-black active:scale-95 md:inline-flex"
          >
            {navbar.cta.text}
            <ArrowUpRight size={15} />
          </SmartLink>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[72px] flex flex-col justify-between bg-gradient-to-b from-ink-2 to-ink px-6 pb-10 pt-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <ul className="space-y-1">
              {navbar.links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 + i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-bold text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="text-accent" size={22} />
                  </a>
                </motion.li>
              ))}
            </ul>
            <SmartLink
              link={navbar.cta.link}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-black active:scale-95"
            >
              {navbar.cta.text}
              <ArrowUpRight size={18} />
            </SmartLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
