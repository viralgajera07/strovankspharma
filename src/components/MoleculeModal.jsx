import React, { useState, useEffect, useRef } from 'react';
import { Dna, Play, Pause, RotateCw, Sparkles, Activity, ShieldCheck, X } from 'lucide-react';

export default function MoleculeModal({ onClose }) {
  const [activeMolecule, setActiveMolecule] = useState('strovamab');
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef(null);

  const molecules = {
    strovamab: {
      name: 'Strovamab (SV-101) IgG1 mAb',
      affinity: 'Kd = 0.42 nM (High-affinity TIGIT binder)',
      formula: 'C6420 H9928 N1712 O2014 S44',
      moa: 'Monoclonal antibody binding to TIGIT receptor, sterically blocking PVR/CD155 interaction and disinhibiting NK & CD8+ T-cell cytotoxicity.',
      nodesCount: 36,
    },
    cardiovanks: {
      name: 'CardioVanks ER (CV-304) Deni Inhibitor',
      affinity: 'IC50 = 1.15 nM (Dual Neprilysin/ETA blocker)',
      formula: 'C28 H31 N3 O5 S',
      moa: 'Small molecule dual action non-peptide antagonist inhibiting endothelin-1 vasoconstriction while preserving vasoactive natriuretic peptides.',
      nodesCount: 22,
    },
    neurostrova: {
      name: 'NeuroStrova (NS-802) Nanobody',
      affinity: 'Kd = 0.08 nM (Hyper-Tau selective)',
      formula: 'Single-Domain VHH Antibody Fragment (14.2 kDa)',
      moa: 'Engineered nanobody crossing the blood-brain barrier via transferrin receptor (TfR) transcytosis to selectively bind hyperphosphorylated Tau seed aggregates.',
      nodesCount: 28,
    }
  };

  // Canvas 3D particle sphere animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = 500;
    let height = canvas.height = 300;

    const selected = molecules[activeMolecule];
    const nodeCount = selected.nodesCount;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.acos(-1 + (2 * i) / nodeCount);
      const phi = Math.sqrt(nodeCount * Math.PI) * theta;
      nodes.push({
        x: 100 * Math.cos(phi) * Math.sin(theta),
        y: 100 * Math.sin(phi) * Math.sin(theta),
        z: 100 * Math.cos(theta),
        radius: Math.random() * 4 + 4,
        color: i % 3 === 0 ? '#00f5d4' : i % 3 === 1 ? '#00bbf9' : '#4361ee',
      });
    }

    let angleX = 0.01;
    let angleY = 0.015;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background glow
      const gradient = ctx.createRadialGradient(width/2, height/2, 10, width/2, height/2, 180);
      gradient.addColorStop(0, 'rgba(0, 245, 212, 0.08)');
      gradient.addColorStop(1, 'rgba(7, 12, 24, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Rotate & project nodes
      nodes.forEach((node) => {
        if (isPlaying) {
          // Rotate around Y
          let radY = angleY;
          let x1 = node.x * Math.cos(radY) - node.z * Math.sin(radY);
          let z1 = node.z * Math.cos(radY) + node.x * Math.sin(radY);

          // Rotate around X
          let radX = angleX;
          let y1 = node.y * Math.cos(radX) - z1 * Math.sin(radX);
          let z2 = z1 * Math.cos(radX) + node.y * Math.sin(radX);

          node.x = x1;
          node.y = y1;
          node.z = z2;
        }

        const scale = 250 / (250 + node.z);
        const px = cx + node.x * scale;
        const py = cy + node.y * scale;

        // Draw connections
        nodes.forEach((n2) => {
          const dx = node.x - n2.x;
          const dy = node.y - n2.y;
          const dz = node.z - n2.z;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
          if (dist < 60) {
            const p2x = cx + n2.x * (250 / (250 + n2.z));
            const p2y = cy + n2.y * (250 / (250 + n2.z));
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2x, p2y);
            ctx.strokeStyle = `rgba(0, 245, 212, ${0.35 * (1 - dist/60)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw node sphere
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, node.radius * scale), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMolecule, isPlaying]);

  const currentMol = molecules[activeMolecule];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel p-6 border-cyan-500/40 max-w-xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Dna className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white">3D Molecular Receptor Simulation</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-white/10">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Molecule Selector Tabs */}
        <div className="flex items-center justify-center gap-2 py-3">
          {Object.keys(molecules).map((key) => (
            <button
              key={key}
              onClick={() => setActiveMolecule(key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeMolecule === key
                  ? 'bg-cyan-600 text-white shadow-md font-bold'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 3D Canvas Visualizer */}
        <div className="relative bg-slate-950 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
          <canvas ref={canvasRef} className="w-full h-64 cursor-grab" />
          
          {/* Controls overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
            <span className="text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> {currentMol.name}
            </span>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1 text-slate-300 hover:text-white"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isPlaying ? 'Pause 3D' : 'Rotate'}</span>
            </button>
          </div>
        </div>

        {/* Molecule Details */}
        <div className="space-y-3 pt-4 text-xs">
          <div className="grid grid-cols-2 gap-3 font-mono">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
              <div className="text-slate-400">Binding Affinity:</div>
              <div className="text-cyan-300 font-bold mt-0.5">{currentMol.affinity}</div>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
              <div className="text-slate-400">Empirical Formula:</div>
              <div className="text-white font-bold mt-0.5 truncate">{currentMol.formula}</div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
            <div className="text-cyan-400 font-semibold mb-1 uppercase tracking-wider font-mono">Mechanism Rationale</div>
            <p className="text-slate-300 leading-relaxed font-sans text-xs">{currentMol.moa}</p>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-white/10">
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Simulation
          </button>
        </div>

      </div>
    </div>
  );
}
