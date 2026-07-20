import { useEffect, useState } from "react";
import { Play, Cpu } from "lucide-react";

const BOOT_LINES = [
  "> initializing neural core ...",
  "> loading AI & DS modules ...",
  "> calibrating design engine ...",
  "> establishing portfolio uplink ...",
  "> system ready.",
];

export default function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  const [booting, setBooting] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!booting) return;
    let i = 0;
    const lineTimer = setInterval(() => {
      setLines((prev) => [...prev, BOOT_LINES[i]]);
      i++;
      if (i >= BOOT_LINES.length) clearInterval(lineTimer);
    }, 350);
    const progTimer = setInterval(() => {
      setProgress((p) => Math.min(100, p + 4));
    }, 70);
    const done = setTimeout(() => {
      setLeaving(true);
      setTimeout(onEnter, 700);
    }, 2200);
    return () => {
      clearInterval(lineTimer);
      clearInterval(progTimer);
      clearTimeout(done);
    };
  }, [booting, onEnter]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* grid backdrop */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 text-center px-6 max-w-xl w-full">
        <p className="mono text-[10px] sm:text-xs tracking-[0.5em] text-muted-foreground mb-4 animate-fade-in">
          SYSTEM · V1.0 · AI &amp; DS
        </p>
        <h1
          className="text-4xl sm:text-6xl font-bold glow-text tracking-tight mb-2 animate-fade-in"
          style={{ textShadow: "0 0 30px hsl(var(--primary)/0.8), 0 0 60px hsl(var(--primary)/0.4)" }}
        >
          INITIATE SEQUENCE
        </h1>
        <p className="mono text-xs text-primary/70 mb-8 animate-fade-in">KIRUTHIKA · PORTFOLIO</p>

        {!booting ? (
          <button
            onClick={() => setBooting(true)}
            className="group inline-flex items-center gap-3 px-8 py-3 rounded-full border border-primary/50 bg-primary/10 text-foreground font-semibold text-sm hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px_hsl(var(--primary))] animate-fade-in"
          >
            <Play size={16} className="text-primary group-hover:translate-x-0.5 transition-transform" fill="currentColor" />
            TAP TO BOOT
          </button>
        ) : (
          <div className="glass-card p-5 text-left animate-fade-in">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <Cpu size={14} className="animate-pulse" />
              <span className="mono text-xs">boot.sequence</span>
              <span className="ml-auto mono text-xs text-muted-foreground">{progress}%</span>
            </div>
            <div className="h-1 rounded-full bg-secondary overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-primary to-[hsl(300,80%,65%)] transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mono text-xs space-y-1 min-h-[120px]">
              {lines.map((l, i) => (
                <div key={i} className="text-primary/90 animate-fade-in">
                  {l}
                </div>
              ))}
              <span className="inline-block w-2 h-3 bg-primary animate-pulse" />
            </div>
          </div>
        )}
        <p className="mono text-[10px] tracking-widest text-muted-foreground mt-6">
          AI &amp; DATA SCIENCE · UI/UX DESIGNER
        </p>
      </div>
    </div>
  );
}
