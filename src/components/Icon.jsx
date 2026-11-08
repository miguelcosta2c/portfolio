import {
  LayoutTemplate,
  Building2,
  Code,
  Smartphone,
  Palette,
  Braces,
  MousePointerClick,
  Gauge,
  Sparkles,
  MessageSquare,
  ClipboardList,
  PenTool,
  RefreshCcw,
  Rocket,
  Mail,
  AtSign,
  Globe,
  Zap,
  ShieldCheck,
} from "lucide-react";

/** Ícone do LinkedIn (o lucide não inclui marcas) — mesmo estilo stroke do lucide. */
function Linkedin({ size = 24, strokeWidth = 2, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/** Ícone do GitHub (o lucide não inclui marcas) — mesmo estilo stroke dos demais ícones. */
function Github({ size = 24, strokeWidth = 2, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

/** Nome (usado em siteData.js) → ícone. Para novos ícones, adicione aqui. */
const icons = {
  layout: LayoutTemplate,
  building: Building2,
  code: Code,
  smartphone: Smartphone,
  palette: Palette,
  braces: Braces,
  pointer: MousePointerClick,
  gauge: Gauge,
  sparkles: Sparkles,
  message: MessageSquare,
  clipboard: ClipboardList,
  pen: PenTool,
  refresh: RefreshCcw,
  rocket: Rocket,
  mail: Mail,
  linkedin: Linkedin,
  instagram: AtSign,
  github: Github,
  globe: Globe,
  zap: Zap,
  shield: ShieldCheck,
};

export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? Sparkles;
  return <Component aria-hidden="true" {...props} />;
}
