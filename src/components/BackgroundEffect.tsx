import React, { useEffect, useRef } from 'react';
import { Code2, Database, GitBranch, Cpu, ShieldCheck, Layers } from 'lucide-react';

export const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }

    const isDarkMode = document.documentElement.classList.contains('dark');

    // 3 Theme Colors: Orange (#ff5400), Cyan (#06b6d4), Purple (#8b5cf6)
    const colors = isDarkMode
      ? ['#ff5400', '#00f2fe', '#a855f7', '#ff7a35', '#38bdf8']
      : ['#ff5400', '#0284c7', '#7c3aed', '#ea580c', '#06b6d4'];

    const particleCount = Math.min(Math.floor(width / 32), 48);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.35,
      });
    }

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect close nodes with tech constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * (isDarkMode ? 0.28 : 0.22);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes with soft glow
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* ── 1. VIBRANT AMBIENT GLOW AURORAS (3 WARNA KONTRAS: ORANGE, CYAN, PURPLE) ── */}
      {/* Top Left: Electric Orange Aurora */}
      <div 
        className="absolute -top-[12%] -left-[10%] w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-br from-[#ff5400]/30 via-orange-500/20 to-transparent blur-[110px] sm:blur-[140px] animate-ambient-1 transform-gpu" 
      />

      {/* Mid Right: Cyan Glow Aurora */}
      <div 
        className="absolute top-[32%] -right-[12%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-bl from-cyan-500/28 via-blue-500/18 to-transparent blur-[110px] sm:blur-[140px] animate-ambient-2 transform-gpu" 
      />

      {/* Bottom Center-Left: Purple Glow Aurora */}
      <div 
        className="absolute bottom-[5%] left-[8%] w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] rounded-full bg-gradient-to-tr from-purple-600/28 via-purple-500/18 to-transparent blur-[120px] sm:blur-[150px] animate-ambient-3 transform-gpu" 
      />

      {/* ── 2. INTERACTIVE CONSTELLATION NETWORK CANVAS ── */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-80 dark:opacity-90"
      />

      {/* ── 3. VISIBLE ARCHITECTURE GRID PATTERN ── */}
      <div className="absolute inset-0 bg-visible-tech-grid" />

      {/* ── 4. PROMINENT FLOATING DEVELOPER BADGES & GLYPHS ── */}
      {/* Badge 1: Web & PHP (Top Left) */}
      <div className="absolute top-[16%] left-[6%] sm:left-[8%] animate-float-slow hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-[#ff5400]/40 text-[#ff5400] text-xs font-mono font-bold shadow-lg shadow-[#ff5400]/10">
        <Code2 className="w-3.5 h-3.5" />
        <span>&lt;PHP / CodeIgniter / Laravel&gt;</span>
      </div>

      {/* Badge 2: Relational DBMS (Top Right) */}
      <div className="absolute top-[22%] right-[6%] sm:right-[10%] animate-float-delayed hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold shadow-lg shadow-cyan-500/10">
        <Database className="w-3.5 h-3.5" />
        <span>DBMS: MySQL • Data Warehouse</span>
      </div>

      {/* Badge 3: Systems Analysis & QA (Mid Left) */}
      <div className="absolute top-[48%] left-[4%] sm:left-[6%] animate-float-delayed hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-purple-500/40 text-purple-600 dark:text-purple-400 text-xs font-mono font-bold shadow-lg shadow-purple-500/10">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Systems Analysis &amp; Quality Assurance</span>
      </div>

      {/* Badge 4: Agile Scrum & Git (Mid Right) */}
      <div className="absolute top-[58%] right-[5%] sm:right-[8%] animate-float-slow hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-[#ff5400]/40 text-[#ff5400] text-xs font-mono font-bold shadow-lg shadow-[#ff5400]/10">
        <GitBranch className="w-3.5 h-3.5" />
        <span>Scrum Sprint • main* ➔ build#pass</span>
      </div>

      {/* Badge 5: Unity & GameMaker (Bottom Left) */}
      <div className="absolute top-[78%] left-[8%] sm:left-[10%] animate-float-slow hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-purple-500/40 text-purple-600 dark:text-purple-400 text-xs font-mono font-bold shadow-lg shadow-purple-500/10">
        <Layers className="w-3.5 h-3.5" />
        <span>Unity (C#) &amp; GameMaker Studio</span>
      </div>

      {/* Badge 6: AI Vibe Coding (Bottom Right) */}
      <div className="absolute top-[84%] right-[7%] sm:right-[12%] animate-float-delayed hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold shadow-lg shadow-cyan-500/10">
        <Cpu className="w-3.5 h-3.5" />
        <span>AI-Assisted Vibe Coding Active</span>
      </div>

      {/* ── 5. BOLD MONOSPACE CODE SYMBOLS IN WATERMARK ── */}
      <div className="absolute top-[12%] right-[22%] font-mono text-5xl sm:text-7xl font-black text-[#ff5400]/15 dark:text-[#ff5400]/20 select-none animate-float-slow">
        &#123; &#125;
      </div>

      <div className="absolute top-[38%] left-[16%] font-mono text-5xl sm:text-7xl font-black text-cyan-500/15 dark:text-cyan-400/20 select-none animate-float-delayed">
        &lt;/&gt;
      </div>

      <div className="absolute top-[68%] right-[18%] font-mono text-5xl sm:text-7xl font-black text-purple-500/15 dark:text-purple-400/20 select-none animate-float-slow">
        =&gt;
      </div>

      <div className="absolute top-[90%] left-[25%] font-mono text-3xl sm:text-5xl font-extrabold text-[#ff5400]/15 dark:text-[#ff5400]/20 select-none animate-float-delayed">
        git:push
      </div>
    </div>
  );
};
