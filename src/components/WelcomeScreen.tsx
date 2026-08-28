import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const orbitWords = ["AI & DATA SCIENCE", "PYTHON", "MERN STACK", "POWER BI", "UI / UX"];

export default function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* Constellation particle field */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(270, 90%, 75%, 0.75)";
        ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `hsla(285, 90%, 70%, ${(1 - dist / 130) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 850);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-all duration-[850ms] ${
        leaving ? "opacity-0 scale-[1.08] blur-md pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Aurora blooms */}
      <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-primary/25 blur-[150px] animate-pulse" />
      <div
        className="absolute -bottom-40 right-1/4 w-[480px] h-[480px] rounded-full bg-[hsl(310,90%,55%)]/20 blur-[150px] animate-pulse"
        style={{ animationDelay: "1.4s" }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)",
        }}
      />

      {/* Corner HUD */}
      <div className="absolute top-6 left-6 right-6 flex justify-between mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground/70">
        <span>Kiruthika · Portfolio</span>
        <span className="hidden sm:inline">Trichy · Tamil Nadu</span>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex justify-between mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground/70">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          Ready
        </span>
        <span>2026</span>
      </div>

      {/* Center stage */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Orbit rings + rotating keywords */}
        <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-primary/20"
            style={{ animation: "spin 26s linear infinite" }}
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary))]" />
          </div>
          <div
            className="absolute inset-8 rounded-full border border-dashed border-[hsl(310,90%,60%)]/25"
            style={{ animation: "spin 18s linear infinite reverse" }}
          >
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(310,90%,65%)] shadow-[0_0_14px_hsl(310,90%,65%)]" />
          </div>
          <div className="absolute inset-16 rounded-full border border-primary/10" />

          {/* Monogram core */}
          <div
            className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center border border-primary/40 backdrop-blur-xl transition-all duration-1000 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              background:
                "radial-gradient(circle at 30% 30%, hsl(270 90% 60% / 0.35), hsl(222 41% 10% / 0.9))",
              boxShadow: "0 0 60px hsl(270 90% 60% / 0.35), inset 0 0 30px hsl(270 90% 60% / 0.2)",
            }}
          >
            <span className="mono text-2xl md:text-3xl font-bold gradient-text">KK</span>
            <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
          </div>
        </div>

        {/* Name */}
        <h1
          className={`mt-8 md:mt-10 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="gradient-text">Kiruthika K</span>
        </h1>
        <p
          className={`mono mt-4 text-[10px] sm:text-xs tracking-[0.45em] uppercase text-muted-foreground transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          Artificial Intelligence &amp; Data Science
        </p>

        {/* Keyword chips */}
        <div className="mt-7 flex flex-wrap justify-center gap-2 max-w-lg">
          {orbitWords.map((wd, i) => (
            <span
              key={wd}
              className={`mono text-[9px] tracking-[0.28em] uppercase px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-foreground/80 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${500 + i * 110}ms` }}
            >
              {wd}
            </span>
          ))}
        </div>

        {/* Enter */}
        <button
          onClick={handleEnter}
          className={`group mt-11 relative inline-flex items-center gap-3 px-9 py-4 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-xl overflow-hidden transition-all duration-700 hover:scale-105 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "1050ms", boxShadow: "0 0 40px hsl(var(--primary) / 0.25)" }}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <Sparkles size={15} className="text-primary relative" />
          <span className="mono relative text-[11px] tracking-[0.4em] uppercase">Enter Portfolio</span>
          <ArrowRight size={15} className="relative text-primary group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
