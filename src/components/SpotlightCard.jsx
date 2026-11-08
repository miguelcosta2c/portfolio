/** Card com brilho que segue o mouse. */
export default function SpotlightCard({ as: Tag = "div", className = "", children }) {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-colors duration-500 hover:border-white/25 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(214,255,77,0.10), transparent 60%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </Tag>
  );
}
