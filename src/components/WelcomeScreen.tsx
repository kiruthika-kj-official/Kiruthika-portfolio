import { useEffect, useState } from "react";
import { Power, Zap } from "lucide-react";
import robotImg from "@/assets/welcome-robot.png";

export default function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  const [activating, setActivating] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!activating) return;
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    const done = setTimeout(() => {
      setLeaving(true);
      setTimeout(onEnter, 800);
    }, 1900);
    return () => {
      clearInterval(t);
      clearTimeout(done);
    };
  }, [activating, onEnter]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden transition-all duration-700 ${
        leaving ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Radial grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[hsl(300,80%,65%)]/20 rounded-full blur-[100px] animate-float" />

      {/* Floating code particles */}
      {["01001", "AI", "NEURAL", "DATA", "ML", "10110", "SYS", "CORE"].map((t, i) => (
        <span
          key={i}
          className="absolute mono text-xs text-primary/40 animate-float pointer-events-none"
          style={{
            top: `${15 + (i * 11) % 70}%`,
            left: `${8 + (i * 17) % 84}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + (i % 3)}s`,
          }}
        >
          {t}
        </span>
      ))}

      <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full">
        {/* Robot orbital display */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center mb-6">
          {/* Orbital rings */}
          <div
            className="absolute inset-0 rounded-full border border-primary/30"
            style={{ animation: "spin 12s linear infinite" }}
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
          </div>
          <div
            className="absolute inset-4 rounded-full border border-[hsl(300,80%,65%)]/30"
            style={{ animation: "spin 8s linear infinite reverse" }}
          >
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(300,80%,65%)] shadow-[0_0_12px_hsl(300,80%,65%)]" />
          </div>
          <div
            className="absolute inset-8 rounded-full border-2 border-dashed border-primary/20"
            style={{ animation: "spin 20s linear infinite" }}
          />

          {/* Robot */}
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-[hsl(300,80%,65%)]/20 flex items-end justify-center border-2 border-primary/50 shadow-[0_0_60px_hsl(var(--primary)/0.6)]">
            <img
              src={robotImg}
              alt="AI"
              className={`w-full h-full object-cover object-top ${activating ? "animate-pulse" : ""}`}
              style={{ filter: "drop-shadow(0 0 20px hsl(var(--primary)/0.8))" }}
            />
            {/* Scan line */}
            {activating && (
              <span
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_hsl(var(--primary))]"
                style={{
                  animation: "scanline 1.2s ease-in-out infinite",
                }}
              />
            )}
          </div>
        </div>

        <p className="mono text-[10px] tracking-[0.4em] text-primary/70 mb-2 uppercase animate-fade-in">
          {activating ? "// AI CORE ONLINE" : "// AI ASSISTANT · STANDBY"}
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold glow-text tracking-tight mb-1 text-center animate-fade-in"
          style={{ textShadow: "0 0 30px hsl(var(--primary)/0.8)" }}
        >
          {activating ? "WELCOME" : "HELLO, HUMAN"}
        </h1>
        <p className="mono text-xs text-muted-foreground mb-6 text-center">
          KIRUTHIKA · AI &amp; DATA SCIENCE
        </p>

        {!activating ? (
          <button
            onClick={() => setActivating(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_hsl(var(--primary))] animate-fade-in"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(300,80%,65%)] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: "200% 100%", animation: "gradient-shift 3s ease infinite" }} />
            <Power size={16} className="relative z-10" />
            <span className="relative z-10 tracking-widest">ACTIVATE</span>
          </button>
        ) : (
          <div className="w-full space-y-3 animate-fade-in">
            <div className="flex items-center justify-between mono text-[10px] text-primary/80">
              <span className="flex items-center gap-1.5">
                <Zap size={10} className="animate-pulse" />
                SYNCING NEURAL LINK
              </span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-primary via-[hsl(300,80%,65%)] to-primary transition-all duration-150 relative"
                style={{ width: `${progress}%`, backgroundSize: "200% 100%", animation: "gradient-shift 2s ease infinite" }}
              >
                <span className="absolute right-0 top-0 h-full w-4 bg-white/60 blur-sm" />
              </div>
            </div>
            <div className="flex justify-between mono text-[9px] text-muted-foreground uppercase tracking-wider">
              <span className={progress > 20 ? "text-primary" : ""}>● core</span>
              <span className={progress > 50 ? "text-primary" : ""}>● vision</span>
              <span className={progress > 75 ? "text-primary" : ""}>● design</span>
              <span className={progress >= 100 ? "text-primary" : ""}>● ready</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scanline {
          0% { top: 0%; opacity: 1; }
          50% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
