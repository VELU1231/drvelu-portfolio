'use client';

import { motion } from 'framer-motion';

/* ─── Floating developer-themed panels ─────────────────────────────────────
 * Pure Framer Motion + Tailwind — no external 3D library required.
 * Each panel slowly bobs on its own phase to create a parallax depth feel.
 * ─────────────────────────────────────────────────────────────────────────── */

export function DevVisuals() {
  return (
    <div
      className="relative w-full h-[520px] select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* ── Code editor panel (top-right, primary panel) ── */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[340px] z-20"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-700/50 bg-slate-900/80 backdrop-blur-md">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800/60 border-b border-slate-700/40">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
            <span className="ml-3 text-[10px] text-slate-400 font-mono tracking-wide">
              page.tsx
            </span>
            <span className="ml-auto text-[10px] text-slate-600 font-mono">tsx</span>
          </div>
          {/* Code content */}
          <div className="px-4 py-3.5 font-mono text-[11px] leading-[1.65] bg-[#0d1117]/60">
            <div>
              <span className="text-violet-400">import</span>
              <span className="text-white"> Hero </span>
              <span className="text-violet-400">from</span>
              <span className="text-amber-300"> &apos;./Hero&apos;</span>
            </div>
            <div>
              <span className="text-violet-400">import</span>
              <span className="text-white"> Projects </span>
              <span className="text-violet-400">from</span>
              <span className="text-amber-300"> &apos;./Projects&apos;</span>
            </div>
            <div className="h-2" />
            <div>
              <span className="text-blue-400">export default </span>
              <span className="text-violet-400">function</span>
              <span className="text-yellow-300"> Home</span>
              <span className="text-slate-300">() {'{'}</span>
            </div>
            <div>
              <span className="text-slate-300">&nbsp;&nbsp;return (</span>
            </div>
            <div>
              <span className="text-slate-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
              <span className="text-blue-400">main</span>
              <span className="text-slate-300"> className</span>
              <span className="text-slate-500">=</span>
              <span className="text-amber-300">&quot;bg-slate-950&quot;</span>
              <span className="text-slate-500">&gt;</span>
            </div>
            <div>
              <span className="text-slate-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
              <span className="text-emerald-400">Hero </span>
              <span className="text-slate-500">/&gt;</span>
            </div>
            <div>
              <span className="text-slate-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
              <span className="text-emerald-400">Projects </span>
              <span className="text-slate-500">/&gt;</span>
            </div>
            <div>
              <span className="text-slate-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
              <span className="text-blue-400">main</span>
              <span className="text-slate-500">&gt;</span>
            </div>
            <div>
              <span className="text-slate-300">&nbsp;&nbsp;)</span>
            </div>
            <div>
              <span className="text-slate-300">{'}'}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Terminal panel (bottom-left, secondary panel) ── */}
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute bottom-24 left-0 w-[290px] z-30"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/10 border border-slate-700/50 bg-[#0d1117]/90 backdrop-blur-md">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800/50 border-b border-slate-700/40">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
            <span className="ml-3 text-[10px] text-slate-400 font-mono">Terminal</span>
          </div>
          {/* Terminal output */}
          <div className="px-4 py-3 font-mono text-[10.5px] leading-[1.7]">
            <div>
              <span className="text-slate-500">$ </span>
              <span className="text-white">npm run dev</span>
            </div>
            <div className="text-slate-600">&nbsp;</div>
            <div>
              <span className="text-slate-500">&nbsp;&nbsp;▲ </span>
              <span className="text-white">next</span>
              <span className="text-slate-400"> dev</span>
            </div>
            <div>
              <span className="text-slate-500">&nbsp;&nbsp;- Local: </span>
              <span className="text-blue-400">http://localhost:3000</span>
            </div>
            <div>
              <span className="text-emerald-400">&nbsp;&nbsp;✓ Ready in </span>
              <span className="text-white">1.4s</span>
            </div>
            <div>
              <span className="text-slate-500">&nbsp;&nbsp;○ Compiling /app ...</span>
            </div>
            <div>
              <span className="text-emerald-400">&nbsp;&nbsp;✓ Compiled in </span>
              <span className="text-white">890ms</span>
            </div>
            {/* Blinking cursor */}
            <div className="flex items-center gap-1">
              <span className="text-slate-500">&nbsp;&nbsp;$ </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.75, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-[7px] h-3.5 bg-slate-300/80"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Metrics / status card (bottom-right) ── */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-4 right-2 z-20 w-[172px]"
      >
        <div className="rounded-xl p-3.5 border border-slate-700/50 bg-slate-900/80 backdrop-blur-md shadow-xl">
          <p className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold mb-2.5">
            Build Status
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-emerald-400 text-[10.5px] font-mono">Build passed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-slate-300 text-[10.5px] font-mono">Perf 98 / 100</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
              <span className="text-slate-300 text-[10.5px] font-mono">0 TS errors</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Floating tech badges ── */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[72px] left-2 z-10"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium backdrop-blur-sm shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          React 18
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-6 left-[44%] z-10"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-700/60 border border-slate-600/50 text-slate-300 text-xs font-medium backdrop-blur-sm shadow-lg">
          ▲ Next.js 15
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [4, -9, 4], rotate: [-1, 3, -1] }}
        transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        className="absolute bottom-[100px] right-[195px] z-10"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-700/15 border border-blue-400/30 text-blue-300 text-xs font-medium backdrop-blur-sm shadow-lg">
          TypeScript
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        className="absolute top-[160px] left-[20px] z-10"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium backdrop-blur-sm shadow-lg">
          Node.js
        </span>
      </motion.div>
    </div>
  );
}
