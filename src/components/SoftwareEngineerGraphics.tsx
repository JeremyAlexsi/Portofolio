import React, { useState } from 'react';
import { 
  GitBranch, 
  GitCommit, 
  GitPullRequest, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Activity,
  Layers,
  Flame,
  ArrowRight
} from 'lucide-react';

export const SoftwareEngineerGraphics: React.FC = () => {
  const [activeCommit, setActiveCommit] = useState<number>(0);
  const [activeChipBlock, setActiveChipBlock] = useState<string>('gpu');

  const gitCommits = [
    {
      hash: 'a89c42f',
      branch: 'main',
      color: '#ff5400', // Electric Orange
      title: 'feat(engine): integrate SIMD WebAssembly pipeline',
      author: 'Jeremy Alexander',
      time: '2 hours ago',
      stats: '+248 / -42 lines',
      impact: 'Reduces vertex computation time by 48% across all browser threads.'
    },
    {
      hash: 'e410b82',
      branch: 'feat/webgl-worker',
      color: '#06b6d4', // Cyan
      title: 'perf(graphics): offload physics calculations to Dedicated Worker',
      author: 'Jeremy Alexander',
      time: 'Yesterday',
      stats: '+184 / -95 lines',
      impact: 'Maintains locked 60.0 FPS even under 400,000 active particle simulations.'
    },
    {
      hash: '3f19a0d',
      branch: 'hotfix/cache-sync',
      color: '#8b5cf6', // Purple
      title: 'fix(caching): atomic Redis pipeline & invalidation lock',
      author: 'Jeremy Alexander',
      time: '3 days ago',
      stats: '+32 / -14 lines',
      impact: 'Eliminates race condition in high-frequency WebSocket trading ticker.'
    }
  ];

  const chipBlocks = {
    gpu: {
      title: 'WebGL / WebGPU Shader Core Matrix',
      spec: '64 Shader Processing Units',
      metric: '60.0 FPS Stable • 1.2M Triangles/sec',
      desc: 'Handles procedural vertex transformations, glowing bloom filters, and custom GLSL fragment shaders directly on the user hardware.'
    },
    worker: {
      title: 'Multithreaded Web Worker Engine',
      spec: '4 Concurrent Dedicated Workers',
      metric: 'Zero Main-Thread Blocking',
      desc: 'Offloads telemetry parsing, spatial audio panning, and N-body physics calculation to independent background CPU threads.'
    },
    memory: {
      title: 'Low-Allocation Memory Pool & Ring Buffers',
      spec: 'Bounded Heap Size < 42 MB',
      metric: '0 Garbage Collection Spikes',
      desc: 'Pre-allocated typed arrays (Float32Array) preventing GC pauses during continuous high-frequency data streams.'
    },
    network: {
      title: 'Realtime WebSocket & HTTP/3 Transport Bus',
      spec: 'Binary Protocol Packets (Protobuf)',
      metric: 'P99 Latency: 14.2 ms',
      desc: 'Full-duplex low-latency communication bus with automatic reconnection and delta compression.'
    }
  };

  return (
    <section id="system-graphics" className="py-24 relative overflow-hidden bg-tech-grid">
      {/* Decorative Ambient Halos */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#ff5400]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5400]/10 border border-[#ff5400]/30 text-[#ff5400] text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
            <Flame className="w-4 h-4 text-[#ff5400] animate-bounce" />
            <span>Interactive Engineering Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Desain Grafis & Cetak Biru Sistem Rekayasa
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Visualisasi teknis arsitektur perangkat lunak: dari topologi Git branch multi-stream hingga pemetaan prosesor chip logika WebGL.
          </p>
        </div>

        {/* 2-Column Grid: Graphic 1 (Git Graph & Diff) & Graphic 2 (Silicon SoC Chip Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

          {/* LEFT: Interactive Git Branch Graph Graphic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-[#ff5400]" />
                    <span>Topologi Git Branch & Commit Stream</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Visualisasi aliran kode, merge point, dan semantic release
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ff5400]/10 text-[#ff5400] font-mono text-xs font-bold border border-[#ff5400]/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5400] animate-ping" />
                  Live Trunk
                </span>
              </div>

              {/* Visual SVG Git Graph Diagram */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono mb-5 overflow-x-auto border border-slate-800 shadow-inner">
                <svg viewBox="0 0 480 140" className="w-full h-32 select-none">
                  {/* Branch lines */}
                  {/* Main Line (Orange) */}
                  <line x1="20" y1="35" x2="460" y2="35" stroke="#ff5400" strokeWidth="3" strokeDasharray="4 2" />
                  
                  {/* Feature Line (Cyan) */}
                  <path d="M 80 35 Q 120 85 160 85 L 300 85 Q 340 85 380 35" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
                  
                  {/* Hotfix Line (Purple) */}
                  <path d="M 220 35 Q 250 115 280 115 L 340 115 Q 370 115 400 35" fill="none" stroke="#a855f7" strokeWidth="2.5" />

                  {/* Branch Labels */}
                  <text x="25" y="24" fill="#ff5400" fontSize="10" fontWeight="bold">main (production)</text>
                  <text x="170" y="76" fill="#06b6d4" fontSize="10" fontWeight="bold">feat/webgl-worker</text>
                  <text x="290" y="130" fill="#a855f7" fontSize="10" fontWeight="bold">hotfix/cache</text>

                  {/* Commit Nodes (Clickable) */}
                  {/* Commit 0 (Main) */}
                  <g onClick={() => setActiveCommit(0)} className="cursor-pointer group">
                    <circle cx="80" cy="35" r="7" fill="#ff5400" stroke="#ffffff" strokeWidth="2" className="transition-transform group-hover:scale-125" />
                    <circle cx="80" cy="35" r="12" fill="none" stroke="#ff5400" strokeWidth="1" opacity="0.4" className="animate-ping" />
                  </g>

                  {/* Commit 1 (Feature) */}
                  <g onClick={() => setActiveCommit(1)} className="cursor-pointer group">
                    <circle cx="230" cy="85" r="7" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" className="transition-transform group-hover:scale-125" />
                  </g>

                  {/* Commit 2 (Hotfix) */}
                  <g onClick={() => setActiveCommit(2)} className="cursor-pointer group">
                    <circle cx="310" cy="115" r="7" fill="#a855f7" stroke="#ffffff" strokeWidth="2" className="transition-transform group-hover:scale-125" />
                  </g>

                  {/* Merge Nodes */}
                  <circle cx="380" cy="35" r="7" fill="#ff5400" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="440" cy="35" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <text x="430" y="20" fill="#10b981" fontSize="9" fontWeight="bold">v2.8.4</text>
                </svg>
                <div className="text-[11px] text-slate-400 text-center">
                  *Klik pada node commit di atas untuk memeriksa inspeksi commit
                </div>
              </div>

              {/* Commit Inspector Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-900 dark:text-white">
                    <GitCommit className="w-4 h-4 text-[#ff5400]" />
                    Commit: <span className="text-[#ff5400]">{gitCommits[activeCommit].hash}</span>
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                    {gitCommits[activeCommit].stats}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  {gitCommits[activeCommit].title}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {gitCommits[activeCommit].impact}
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span>Author: {gitCommits[activeCommit].author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {gitCommits[activeCommit].time}
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Refactor Diff Graphic */}
            <div className="glass-panel p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <GitPullRequest className="w-4 h-4 text-emerald-500" />
                  Code Optimization Diff (Flamegraph Benchmark)
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">14.6x Speedup</span>
              </div>
              
              <div className="p-3.5 rounded-xl bg-slate-900 font-mono text-xs space-y-1.5 overflow-x-auto text-slate-300">
                <div className="text-rose-400 bg-rose-950/40 px-2 py-1 rounded border-l-2 border-rose-500">
                  - // Before: O(N²) unbatched draw calls & garbage collection spikes (52.4ms)
                </div>
                <div className="text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border-l-2 border-emerald-500">
                  + // After: O(1) InstancedBufferGeometry + SIMD Web Workers pool (3.6ms)
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Silicon SoC / Microprocessor Graphic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#ff5400]" />
                    <span>Diagram Chip Silikon Sistem ("AP-ENGINE 3D")</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Pemetaan hardware-accelerated processing pipeline
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold border border-cyan-500/20">
                  64-bit SOC
                </span>
              </div>

              {/* Silicon Die Graphic Layout */}
              <div className="p-5 rounded-2xl bg-[#0b0f19] border-2 border-slate-800 relative mb-5 select-none shadow-2xl">
                {/* Microchip Corner Pins */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-slate-500">PIN: VDD_01</div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-500">PIN: BUS_CLK</div>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">IO: GLSL_OUT</div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-500">GND_CORE</div>

                <div className="grid grid-cols-2 gap-3 py-4">
                  {/* Block 1: GPU Shader */}
                  <div
                    onClick={() => setActiveChipBlock('gpu')}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      activeChipBlock === 'gpu'
                        ? 'bg-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-950/50'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400 mb-1">
                      <span>CORE-01: GPU SHADER</span>
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] text-slate-300">WebGL 2.0 / GLSL Pipeline</div>
                    <div className="text-[10px] text-emerald-400 mt-2 font-mono">60 FPS Locked</div>
                  </div>

                  {/* Block 2: Multithread Worker */}
                  <div
                    onClick={() => setActiveChipBlock('worker')}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      activeChipBlock === 'worker'
                        ? 'bg-[#ff5400]/20 border-[#ff5400] shadow-lg shadow-[#ff5400]/20'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-[#ff5400] mb-1">
                      <span>CORE-02: WORKER</span>
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] text-slate-300">Web Workers Multithread</div>
                    <div className="text-[10px] text-[#ff5400] mt-2 font-mono">Zero UI Lag</div>
                  </div>

                  {/* Block 3: Memory Ring Buffer */}
                  <div
                    onClick={() => setActiveChipBlock('memory')}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      activeChipBlock === 'memory'
                        ? 'bg-purple-950/60 border-purple-400 shadow-lg shadow-purple-950/50'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-purple-400 mb-1">
                      <span>CACHE: RING BUFFER</span>
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] text-slate-300">Float32 Typed Arrays</div>
                    <div className="text-[10px] text-purple-300 mt-2 font-mono">&lt;42MB Heap</div>
                  </div>

                  {/* Block 4: Realtime Bus */}
                  <div
                    onClick={() => setActiveChipBlock('network')}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      activeChipBlock === 'network'
                        ? 'bg-emerald-950/60 border-emerald-400 shadow-lg shadow-emerald-950/50'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400 mb-1">
                      <span>BUS: WEBSOCKET</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] text-slate-300">Binary Stream Protobuf</div>
                    <div className="text-[10px] text-emerald-400 mt-2 font-mono">14.2ms P99</div>
                  </div>
                </div>

                <div className="text-[10px] text-center font-mono text-slate-400">
                  SYSTEM ON CHIP — ARCHITECTURE v2.8 • FABRICATED BY JEREMY ALEXANDER
                </div>
              </div>

              {/* Block Spec Details */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {chipBlocks[activeChipBlock as keyof typeof chipBlocks].title}
                  </h4>
                  <span className="font-mono text-xs text-[#ff5400] font-bold">
                    {chipBlocks[activeChipBlock as keyof typeof chipBlocks].metric}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {chipBlocks[activeChipBlock as keyof typeof chipBlocks].desc}
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Spec: {chipBlocks[activeChipBlock as keyof typeof chipBlocks].spec}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
