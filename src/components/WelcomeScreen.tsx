import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export default function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  const [booting, setBooting] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!booting) return;
    const t = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 4));
    }, 30);
    const done = setTimeout(() => {
      setLeaving(true);
      setTimeout(onEnter, 900);
    }, 1400);
    return () => {
      clearInterval(t);
      clearTimeout(done);
    };
  }, [booting, onEnter]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#05010f] overflow-hidden transition-all duration-700 ${
        leaving ? "opacity-0 scale-110 blur-xl pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Perspective grid floor */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <div
          className="w-[200%] h-[60%] opacity-40"
          style={{
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center top",
            backgroundImage:
              "linear-gradient(hsl(270,90%,65%,0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(270,90%,65%,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, transparent, black 30%, transparent)",
            animation: "gridflow 8s linear infinite",
          }}
        />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/25 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(310,90%,60%)]/20 rounded-full blur-[140px]" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[hsl(220,90%,60%)]/15 rounded-full blur-[120px]" />

      {/* Corner HUD */}
      <div className="absolute top-6 left-6 mono text-[10px] tracking-[0.3em] text-primary/70">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          KIRUTHIKA · OS
        </div>
        <div className="mt-1 text-muted-foreground">v2.6.1 // AI CORE</div>
      </div>
      <div className="absolute top-6 right-6 mono text-[10px] tracking-[0.3em] text-primary/70 text-right">
        <div>TRICHY · TN</div>
        <div className="mt-1 text-muted-foreground">10.79°N · 78.70°E</div>
      </div>
      <div className="absolute bottom-6 left-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
        © 2026 · PORTFOLIO NODE
      </div>
      <div className="absolute bottom-6 right-6 mono text-[10px] tracking-[0.3em] text-primary/70">
        ● LIVE
      </div>

      {/* Center */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Rotating rings */}
        <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center mb-4">
          <div
            className="absolute inset-0 rounded-full border border-primary/25"
            style={{ animation: "spin 30s linear infinite" }}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary))]" />
          </div>
          <div
            className="absolute inset-8 rounded-full border border-dashed border-[hsl(310,90%,65%)]/30"
            style={{ animation: "spin 18s linear infinite reverse" }}
          />
          <div
            className="absolute inset-16 rounded-full border border-primary/20"
            style={{ animation: "spin 22s linear infinite" }}
          >
            <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(310,90%,65%)] shadow-[0_0_12px_hsl(310,90%,65%)]" />
          </div>

          {/* Center label */}
          <div className="relative text-center">
            <div className="mono text-[10px] tracking-[0.6em] text-primary/80 mb-3">
              · SYSTEM · READY ·
            </div>
            <h1
              className="text-5xl sm:text-7xl font-black tracking-tight leading-none"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "linear-gradient(180deg, #ffffff 0%, hsl(270,90%,75%) 50%, hsl(310,90%,65%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px hsl(var(--primary)/0.6))",
              }}
            >
              KIRUTHIKA
            </h1>
            <div className="mt-3 mono text-[10px] sm:text-xs tracking-[0.4em] text-muted-foreground">
              AI · DATA · DESIGN
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="mono text-[10px] sm:text-xs tracking-[0.35em] text-primary/60 uppercase mb-6 text-center max-w-md">
          — a neural portfolio experience —
        </p>

        {/* Action */}
        {!booting ? (
          <button
            onClick={() => setBooting(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-md text-foreground font-semibold text-xs tracking-[0.35em] overflow-hidden transition-all duration-500 hover:bg-primary/20 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary))]"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "inset 0 0 30px hsl(var(--primary)/0.4)" }} />
            <Play size={14} className="relative z-10 fill-primary text-primary" />
            <span className="relative z-10">INITIATE</span>
          </button>
        ) : (
          <div className="w-72 space-y-3 animate-fade-in">
            <div className="flex items-center justify-between mono text-[10px] tracking-widest text-primary/80">
              <span>ENGAGING NEURAL LINK</span>
              <span>{progress}%</span>
            </div>
            <div className="h-[3px] rounded-full bg-primary/10 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-primary via-[hsl(310,90%,65%)] to-primary transition-all duration-150 relative"
                style={{ width: `${progress}%`, backgroundSize: "200% 100%", animation: "gradient-shift 2s ease infinite" }}
              >
                <span className="absolute right-0 top-0 h-full w-6 bg-white/70 blur-md" />
              </div>
            </div>
          </div>
        )}

        <p className="mono text-[9px] tracking-[0.3em] text-muted-foreground/60 mt-6 uppercase">
          Best experienced with sound · headphones recommended
        </p>
      </div>

      <style>{`
        @keyframes gridflow {
          0% { background-position: 0 0; }
          100% { background-position: 0 60px; }
        }
      `}</style>
    </div>
  );
}
