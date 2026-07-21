import { useEffect, useRef, useState } from "react";
import { ArrowRight, Cpu, Brain, Database, Code2 } from "lucide-react";

const BOOT_LINES = [
  "$ initializing kiruthika.ai --mode=portfolio",
  "> loading neural_core.....................[ok]",
  "> mounting design_system.................[ok]",
  "> compiling ui/ux_modules................[ok]",
  "> syncing projects & achievements........[ok]",
  "> establishing recruiter_link............[ok]",
  "> system ready. welcome, visitor.",
];

const CHIPS = [
  { icon: Brain, label: "AI & DATA SCIENCE" },
  { icon: Code2, label: "MERN · PYTHON" },
  { icon: Cpu, label: "UI / UX DESIGN" },
  { icon: Database, label: "MYSQL · POWER BI" },
];

export default function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [ready, setReady] = useState(false);

  // Neural network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.strokeStyle = `hsla(270, 80%, 65%, ${0.18 * (1 - d / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "hsla(280, 90%, 70%, 0.85)";
        ctx.shadowColor = "hsl(270, 80%, 60%)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Typewriter
  useEffect(() => {
    if (lineIdx >= BOOT_LINES.length) {
      setReady(true);
      return;
    }
    const line = BOOT_LINES[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, 180);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background overflow-hidden transition-all duration-700 ${
        leaving ? "opacity-0 scale-105 pointer-events-none blur-md" : "opacity-100"
      }`}
    >
      {/* Neural network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Vignette glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(300,80%,65%)]/15 rounded-full blur-[140px]" />

      {/* Top status bar */}
      <div className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between mono text-[10px] tracking-widest text-primary/70 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
          KIRUTHIKA.OS · v2.6.1
        </div>
        <div className="hidden sm:flex items-center gap-4 text-muted-foreground">
          <span>LAT 10.79° N</span>
          <span>LON 78.70° E</span>
          <span className="text-primary">TRICHY · TN</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Corner brackets frame */}
        <div className="relative w-full max-w-3xl">
          <span className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <span className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <span className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <span className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />

          <div className="glass-card p-8 sm:p-12 bg-background/40 backdrop-blur-2xl border-primary/20">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="mono text-[10px] tracking-[0.5em] text-primary/70 mb-3 uppercase">
                // Neural Portfolio · Boot Sequence
              </p>
              <h1
                className="text-5xl sm:text-7xl font-black tracking-tight leading-none"
                style={{ textShadow: "0 0 40px hsl(var(--primary)/0.5)" }}
              >
                <span className="gradient-text">KIRUTHIKA</span>
              </h1>
              <p className="mono text-xs sm:text-sm text-muted-foreground mt-3 tracking-wider">
                &lt; AI &amp; DATA SCIENCE · UI/UX DESIGNER /&gt;
              </p>
            </div>

            {/* Terminal boot log */}
            <div className="bg-background/70 border border-primary/20 rounded-lg p-4 sm:p-5 mono text-[11px] sm:text-xs h-44 overflow-hidden relative">
              <div className="absolute top-2 left-3 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <div className="mt-5 space-y-1 text-primary/90">
                {BOOT_LINES.slice(0, lineIdx).map((l, i) => (
                  <div key={i} className={l.includes("[ok]") ? "text-green-400/80" : "text-primary/80"}>
                    {l}
                  </div>
                ))}
                {lineIdx < BOOT_LINES.length && (
                  <div className="text-foreground/90">
                    {BOOT_LINES[lineIdx].slice(0, charIdx)}
                    <span className="inline-block w-2 h-3 bg-primary ml-0.5 animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            {/* Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
              {CHIPS.map((c, i) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-primary/20 bg-primary/5 mono text-[9px] tracking-wider text-primary/80"
                  style={{ animation: `fade-in 0.5s ease ${i * 0.15}s both` }}
                >
                  <c.icon size={12} />
                  <span className="truncate">{c.label}</span>
                </div>
              ))}
            </div>

            {/* Enter button */}
            <div className="mt-8 flex flex-col items-center">
              <button
                onClick={handleEnter}
                disabled={!ready}
                className={`group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-sm overflow-hidden transition-all duration-500 ${
                  ready
                    ? "bg-primary text-primary-foreground hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary))] cursor-pointer"
                    : "bg-secondary text-muted-foreground cursor-not-allowed opacity-60"
                }`}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(300,80%,65%)] to-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundSize: "200% 100%", animation: "gradient-shift 3s ease infinite" }}
                />
                <span className="relative z-10 tracking-[0.3em]">
                  {ready ? "ENTER PORTFOLIO" : "BOOTING..."}
                </span>
                {ready && <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
              </button>
              {ready && (
                <p className="mono text-[10px] text-muted-foreground mt-3 tracking-widest animate-pulse">
                  press to initiate experience
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-4 left-0 right-0 px-6 flex items-center justify-between mono text-[9px] tracking-widest text-muted-foreground z-10">
        <span>© 2026 · KIRUTHIKA.K</span>
        <span className="hidden sm:inline">SECURE · ENCRYPTED · PORTFOLIO NODE</span>
        <span className="text-primary">● LIVE</span>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
