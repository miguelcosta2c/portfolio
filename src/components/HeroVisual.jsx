import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// O 3D é carregado sob demanda (code-splitting): não pesa no carregamento inicial.
const Scene3D = lazy(() => import("./Scene3D"));

class Boundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {}
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Elemento 3D da Hero. Mostra um orbe em CSS (leve) enquanto o 3D carrega,
 * e mantém só o orbe se o usuário prefere menos movimento ou não há WebGL.
 */
export default function HeroVisual() {
  const wrapper = useRef(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduce || !hasWebGL()) {
      setEnabled(false);
      return;
    }
    // Espera o navegador ficar ocioso para não competir com o primeiro render.
    const start = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 800 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 250);
    return () => window.clearTimeout(id);
  }, [reduce]);

  // Pausa a renderização quando a Hero sai da tela.
  useEffect(() => {
    const el = wrapper.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapper} aria-hidden="true" className="absolute inset-0">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-0" : "opacity-100"}`}
      >
        <div className="orb" />
      </div>

      {enabled && (
        <div className="absolute inset-0">
          <Boundary>
            <Suspense fallback={null}>
              <Scene3D active={visible} onReady={() => setReady(true)} />
            </Suspense>
          </Boundary>
        </div>
      )}
    </div>
  );
}
