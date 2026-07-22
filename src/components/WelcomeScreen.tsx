import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import robotImg from "@/assets/welcome-robot.png";

type Phase = "idle" | "booting" | "greeting" | "leaving";

const BOOT_LINES = [
  "> initializing neural core...",
  "> loading design modules...",
  "> syncing portfolio assets...",
  "> establishing connection...",
];

export default function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [waveStep, setWaveStep] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [typed, setTyped] = useState("");

  const greeting = "Hi, I'm Kiruthika 👋";

  // Boot progress
  useEffect(() => {
    if (phase !== "booting") return;
    const t = setInterval(() => {
      setProgress((p) => Math.min(100, p + 5));
    }, 40);
    const lineT = setInterval(() => {
      setLineIdx((i) => Math.min(BOOT_LINES.length - 1, i + 1));
    }, 260);
    const done = setTimeout(() => setPhase("greeting"), 1200);
    return () => {
      clearInterval(t);
      clearInterval(lineT);
      clearTimeout(done);
    };
  }, [phase]);

  // Greeting animation — robot waves + speech bubble types out
  useEffect(() => {
    if (phase !== "greeting") return;
    const waveT = setInterval(() => setWaveStep((w) => w + 1), 300);
    const bubbleT = setTimeout(() => setShowBubble(true), 500);
    return () => {
      clearInterval(waveT);
      clearTimeout(bubbleT);
    };
  }, [phase]);

  useEffect(() => {
    if (!showBubble) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(greeting.slice(0, i));
      if (i >= greeting.length) clearInterval(t);
    }, 55);
    const leave = setTimeout(() => setPhase("leaving"), 2600);
    const enter = setTimeout(onEnter, 3400);
    return () => {
      clearInterval(t);
      clearTimeout(leave);
      clearTimeout(enter);
    };
  }, [showBubble, onEnter]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#06010f] overflow-hidden transition-all duration-700 ${
        phase === "leaving" ? "opacity-0 scale-110 blur-2xl pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Aurora */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/25 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[hsl(310,90%,60%)]/20 blur-[160px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[30%] right-[30%] w-[280px] h-[280px] rounded-full bg-[hsl(220,90%,60%)]/20 blur-[120px]" />
      </div>

      {/* Radial grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(270,90%,65%,0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(270,90%,65%,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      {/* HUD corners */}
      <div className="absolute top-6 left-6 mono text-[10px] tracking-[0.35em] text-primary/70">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          KIRUTHIKA · OS
        </div>
        <div className="mt-1 text-muted-foreground">v3.0.0 // NEURAL CORE</div>
      </div>
      <div className="absolute top-6 right-6 mono text-[10px] tracking-[0.35em] text-primary/70 text-right">
        <div>TRICHY · TN</div>
        <div className="mt-1 text-muted-foreground">10.79°N · 78.70°E</div>
      </div>
      <div className="absolute bottom-6 left-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
        © 2026 · PORTFOLIO NODE
      </div>
      <div className="absolute bottom-6 right-6 mono text-[10px] tracking-[0.3em] text-primary/70 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        ONLINE
      </div>

      {/* Center stage */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Robot stage */}
        <div className="relative w-[320px] h-[360px] sm:w-[400px] sm:h-[440px] flex items-end justify-center">
          {/* Halo rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-primary/30"
              style={{ animation: "spin 28s linear infinite" }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]" />
            </div>
            <div
              className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-[hsl(310,90%,65%)]/40"
              style={{ animation: "spin 18s linear infinite reverse" }}
            />
          </div>

          {/* Speech bubble */}
          {phase === "greeting" && showBubble && (
            <div
              className="absolute top-2 sm:top-4 left-1/2 -translate-x-[10%] sm:-translate-x-[0%] animate-fade-in z-30"
              style={{ transformOrigin: "bottom left" }}
            >
              <div className="relative bg-card/90 backdrop-blur-xl border border-primary/50 rounded-2xl rounded-bl-sm px-5 py-3 shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                <div className="flex items-center gap-2 mono text-[9px] tracking-[0.3em] text-primary/70 mb-1">
                  <Sparkles size={10} />
                  NEURAL GREETING
                </div>
                <div className="text-base sm:text-lg font-semibold whitespace-nowrap">
                  {typed}
                  <span className="inline-block w-[2px] h-4 bg-primary ml-0.5 animate-pulse align-middle" />
                </div>
                {/* tail */}
                <span className="absolute -bottom-1.5 left-6 w-3 h-3 bg-card/90 border-r border-b border-primary/50 rotate-45" />
              </div>
            </div>
          )}

          {/* Waving hand overlay (SVG) */}
          {phase === "greeting" && (
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                right: "8%",
                top: "22%",
                transformOrigin: "80% 80%",
                animation: "wave 0.6s ease-in-out infinite",
              }}
            >
              <div className="text-5xl sm:text-6xl drop-shadow-[0_0_20px_hsl(var(--primary))]">
                👋
              </div>
            </div>
          )}

          {/* Robot */}
          <img
            src={robotImg}
            alt="AI robot mascot"
            className={`relative z-10 w-[85%] h-[85%] object-contain drop-shadow-[0_20px_60px_hsl(var(--primary)/0.5)] transition-transform duration-700 ${
              phase === "greeting" ? "scale-105 -translate-y-1" : "scale-100"
            }`}
            style={{
              animation: phase === "idle"
                ? "float 5s ease-in-out infinite"
                : phase === "greeting"
                ? "robot-bounce 1.4s ease-in-out infinite"
                : "float 5s ease-in-out infinite",
            }}
          />

          {/* Ground shadow */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-4 bg-primary/40 blur-2xl rounded-full" />
        </div>

        {/* Name */}
        <div className="mt-6 text-center">
          <div className="mono text-[10px] tracking-[0.5em] text-primary/70 mb-2">
            {phase === "greeting" ? "· CONNECTION ESTABLISHED ·" : "· SYSTEM · READY ·"}
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black tracking-tight leading-none"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background:
                "linear-gradient(180deg, #ffffff 0%, hsl(270,90%,75%) 50%, hsl(310,90%,65%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px hsl(var(--primary)/0.6))",
            }}
          >
            KIRUTHIKA
          </h1>
          <div className="mt-2 mono text-[10px] sm:text-xs tracking-[0.4em] text-muted-foreground">
            AI · DATA · DESIGN
          </div>
        </div>

        {/* Bottom action zone */}
        <div className="mt-8 h-24 flex items-center justify-center">
          {phase === "idle" && (
            <button
              onClick={() => setPhase("booting")}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-md text-foreground font-semibold text-xs tracking-[0.4em] overflow-hidden transition-all duration-500 hover:bg-primary/20 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary))]"
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ boxShadow: "inset 0 0 30px hsl(var(--primary)/0.4)" }}
              />
              <span className="relative z-10 w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
              <span className="relative z-10">ACTIVATE</span>
            </button>
          )}

          {phase === "booting" && (
            <div className="w-80 space-y-3 animate-fade-in">
              <div className="mono text-[10px] tracking-widest text-primary/80 space-y-0.5 h-10 overflow-hidden">
                {BOOT_LINES.slice(0, lineIdx + 1).map((l, i) => (
                  <div key={i} className={i === lineIdx ? "text-primary" : "text-muted-foreground"}>
                    {l} <span className="text-emerald-400">[ok]</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mono text-[10px] tracking-widest text-primary/80">
                <span>NEURAL LINK</span>
                <span>{progress}%</span>
              </div>
              <div className="h-[3px] rounded-full bg-primary/10 overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-primary via-[hsl(310,90%,65%)] to-primary transition-all duration-150"
                  style={{
                    width: `${progress}%`,
                    backgroundSize: "200% 100%",
                    animation: "gradient-shift 2s ease infinite",
                  }}
                >
                  <span className="absolute right-0 top-0 h-full w-6 bg-white/70 blur-md" />
                </div>
              </div>
            </div>
          )}

          {phase === "greeting" && (
            <div className="mono text-[10px] sm:text-xs tracking-[0.4em] text-primary/80 uppercase animate-fade-in">
              — entering portfolio —
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes robot-bounce {
          0%, 100% { transform: translateY(-4px) scale(1.05); }
          50% { transform: translateY(-14px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}
