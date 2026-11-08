import { useEffect } from "react";
import { siteData } from "./data/siteData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Differentials from "./components/Differentials";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// id usado em siteData.layout.sections → componente.
const sectionMap = {
  about: About,
  services: Services,
  projects: Projects,
  process: Process,
  differentials: Differentials,
  testimonials: Testimonials,
  faq: FAQ,
  contact: Contact,
};

export default function App() {
  const { seo, layout, ui } = siteData;

  // SEO básico dirigido pelos dados (título, descrição, cor do tema).
  useEffect(() => {
    document.title = seo.title;
    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[name="theme-color"]', "content", seo.themeColor);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
  }, [seo]);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-accent px-5 py-2.5 font-medium text-black transition-transform focus:translate-y-0"
      >
        {ui.skipToContent}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        {layout.sections.map((id) => {
          const Section = sectionMap[id];
          return Section ? <Section key={id} /> : null;
        })}
      </main>
      <Footer />
    </>
  );
}
