import {
  Environment,
  Float,
  Lightformer,
  MeshDistortMaterial,
  PerformanceMonitor,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { MathUtils, MeshStandardMaterial } from "three";

const ACCENT = "#d6ff4d";
const VIOLET = "#7c5cff";
const METAL = "#1a1d29";

/** Evita "saltos" nas animações quando a aba volta ao foco ou o quadro demora. */
const safeDelta = (dt) => Math.min(dt, 0.05);

/** Gerador pseudoaleatório determinístico: as partículas ficam iguais a cada carregamento. */
function mulberry32(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Posição do mouse normalizada (-1 a 1) em toda a janela, não só sobre o canvas.
 * Assim o parallax funciona mesmo com o cursor sobre o texto da Hero.
 * Toques são ignorados para não atrapalhar a rolagem no celular.
 */
function usePointerTarget() {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return target;
}

/** Parallax suave + leve movimento ocioso + escala que se ajusta ao tamanho do container. */
function Rig({ children }) {
  const group = useRef(null);
  const pointer = usePointerTarget();
  const viewport = useThree((s) => s.viewport);

  // Mantém os anéis (raio ~2.6) dentro do quadro em telas estreitas.
  const fit = MathUtils.clamp(Math.min(viewport.width, viewport.height) / 5.2, 0.6, 1.1);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const d = safeDelta(dt);
    const t = state.clock.elapsedTime;
    const { x, y } = pointer.current;

    g.rotation.y = MathUtils.damp(g.rotation.y, x * 0.35 + Math.sin(t * 0.3) * 0.06, 3, d);
    g.rotation.x = MathUtils.damp(g.rotation.x, -y * 0.2 + Math.cos(t * 0.25) * 0.04, 3, d);
    g.position.x = MathUtils.damp(g.position.x, x * 0.25, 3, d);
    g.position.y = MathUtils.damp(g.position.y, y * 0.15, 3, d);
  });

  return (
    <group ref={group} scale={fit}>
      {children}
    </group>
  );
}

/** Esfera metálica com deformação orgânica. */
const Orb = memo(function Orb() {
  const mesh = useRef(null);
  useFrame((_, dt) => {
    if (mesh.current) mesh.current.rotation.y += safeDelta(dt) * 0.15;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <MeshDistortMaterial
          color="#0d0f16"
          metalness={1}
          roughness={0.14}
          distort={0.3}
          speed={1.6}
          envMapIntensity={1.6}
        />
      </mesh>
    </Float>
  );
});

/** Anéis luminosos orbitando a esfera. */
const Rings = memo(function Rings() {
  const a = useRef(null);
  const b = useRef(null);
  useFrame((_, dt) => {
    const d = safeDelta(dt);
    if (a.current) a.current.rotation.z += d * 0.25;
    if (b.current) b.current.rotation.x += d * 0.18;
  });
  return (
    <>
      <mesh ref={a} rotation={[1.25, 0, 0.3]}>
        <torusGeometry args={[2.1, 0.014, 16, 220]} />
        <meshBasicMaterial color={ACCENT} />
      </mesh>
      <mesh ref={b} rotation={[0.4, 1.0, 0]}>
        <torusGeometry args={[2.55, 0.008, 16, 220]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.85} />
      </mesh>
    </>
  );
});

const SHARD_GEOMETRY = {
  oct: "octahedronGeometry",
  ico: "icosahedronGeometry",
  tet: "tetrahedronGeometry",
};

const SHARDS = [
  { position: [-2.3, 1.3, -0.5], scale: 0.28, shape: "oct" },
  { position: [2.4, -1.2, 0.2], scale: 0.34, shape: "ico" },
  { position: [1.9, 1.7, -1], scale: 0.18, shape: "tet" },
  { position: [-1.9, -1.6, 0.6], scale: 0.22, shape: "ico" },
];

/** Objetos geométricos flutuando (compartilham um único material) + estrutura em wireframe. */
const Shards = memo(function Shards() {
  const lattice = useRef(null);

  const material = useMemo(
    () => new MeshStandardMaterial({ color: METAL, metalness: 1, roughness: 0.2, envMapIntensity: 1.4 }),
    []
  );
  useEffect(() => () => material.dispose(), [material]);

  useFrame((_, dt) => {
    if (lattice.current) {
      const d = safeDelta(dt);
      lattice.current.rotation.y += d * 0.06;
      lattice.current.rotation.x += d * 0.03;
    }
  });

  return (
    <>
      {SHARDS.map(({ position, scale, shape }, i) => {
        const Geometry = SHARD_GEOMETRY[shape];
        return (
          <Float key={i} speed={1.2 + i * 0.3} rotationIntensity={1.4} floatIntensity={1.2}>
            <mesh position={position} scale={scale} material={material}>
              <Geometry args={[1]} />
            </mesh>
          </Float>
        );
      })}
      <mesh ref={lattice} scale={1.9}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial wireframe color="#ffffff" transparent opacity={0.06} />
      </mesh>
    </>
  );
});

/** Partículas sutis ao fundo (posições determinísticas). */
const Particles = memo(function Particles({ count = 220 }) {
  const points = useRef(null);

  const positions = useMemo(() => {
    const random = mulberry32(1337);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + random() * 2.5;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    if (points.current) points.current.rotation.y += safeDelta(dt) * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
});

/** Avisa que a cena já desenhou quadros reais (evita piscar ao trocar o orbe CSS pelo 3D). */
function ReadySignal({ onReady }) {
  const frames = useRef(0);
  const done = useRef(false);
  useFrame(() => {
    if (done.current) return;
    if (++frames.current >= 2) {
      done.current = true;
      onReady?.();
    }
  });
  return null;
}

export default function Scene3D({ active = true, onReady }) {
  // Se o dispositivo não aguentar o ritmo, reduz resolução e partículas automaticamente.
  const [degraded, setDegraded] = useState(false);

  return (
    <Canvas
      dpr={degraded ? 1 : [1, 1.75]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 6.2], fov: 38 }}
      gl={{ antialias: !degraded, alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y" }}
      onCreated={({ gl }) => {
        // Permite que o navegador restaure o contexto WebGL se ele for perdido.
        gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
      }}
    >
      <PerformanceMonitor onDecline={() => setDegraded(true)} />

      <ambientLight intensity={0.25} />
      <pointLight position={[4, 3, 4]} intensity={30} color={ACCENT} />
      <pointLight position={[-4, -2, 3]} intensity={25} color={VIOLET} />

      {/* Ambiente criado localmente (sem baixar HDRI). frames={1}: renderiza uma vez só. */}
      <Environment resolution={256} frames={1}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="rect" intensity={4} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer form="ring" color={ACCENT} intensity={3} position={[-5, 1, -1]} scale={4} />
          <Lightformer form="rect" color={VIOLET} intensity={3} position={[5, -1, -1]} scale={[4, 6, 1]} />
        </group>
      </Environment>

      <Rig>
        <Orb />
        <Rings />
        <Shards />
      </Rig>
      <Particles count={degraded ? 90 : 220} />

      <ReadySignal onReady={onReady} />
    </Canvas>
  );
}